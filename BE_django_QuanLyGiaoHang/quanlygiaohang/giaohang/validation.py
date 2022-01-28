from django.core.exceptions import ValidationError
import re
from .models import *
import django.contrib.auth.password_validation as validators
from django.core.validators import validate_email


def validation_cmnd(data):
    errors = []
    regex = re.compile(r'[0-9]')
    if data is None:
        errors.append("Can't be empty")
    else:
        if regex.match(data) is None or len(str(data)) < 9 or len(str(data)) > 12:
            errors.append("ID Incorrect format")
        if Shipper.objects.filter(cmnd=data).exists():
            errors.append("Identity card has been registered")
    return errors


def validate_phone_number(data):
    errors = []
    regex = re.compile(r'(84|0[3|5|7|8|9])+([0-9]{8})\b')
    if data is None:
        errors.append("Can't be empty")
        return errors
    else:
        if regex.match(data) is None:
            errors.append("phone number is not in the correct format")
    return errors


def validate_password(data):
    errors = []
    if data is None:
        errors.append("Can't be empty")
        return errors
    try:
        validators.validate_password(password=data)
    except ValidationError as e:
        errors = list(e.messages)
        return errors
    return errors


def validation_username(data):
    errors = []
    if data is None:
        errors.append("Can't be empty")
        return errors
    if User.objects.filter(username=data).exists():
        errors.append("Username has been registered")
    return errors

def validation_email(data):
    errors = []
    if data is None:
        errors.append("Can't be empty")
        return errors
    try:
        validate_email(data)
    except ValidationError as e:
        errors = list(e.messages)
        return errors
    return errors
def validate_rate(data):
    errors = []
    if data is None:
        errors.append("Can't be empty")
        return errors

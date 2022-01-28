-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: quanlygiaohang
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
INSERT INTO `auth_group` VALUES (3,'Admin'),(1,'KhachHang'),(2,'Shipper');
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add user',6,'add_user'),(22,'Can change user',6,'change_user'),(23,'Can delete user',6,'delete_user'),(24,'Can view user',6,'view_user'),(25,'Can add bai dang',7,'add_baidang'),(26,'Can change bai dang',7,'change_baidang'),(27,'Can delete bai dang',7,'delete_baidang'),(28,'Can view bai dang',7,'view_baidang'),(29,'Can add category',8,'add_category'),(30,'Can change category',8,'change_category'),(31,'Can delete category',8,'delete_category'),(32,'Can view category',8,'view_category'),(33,'Can add dau gia',9,'add_daugia'),(34,'Can change dau gia',9,'change_daugia'),(35,'Can delete dau gia',9,'delete_daugia'),(36,'Can view dau gia',9,'view_daugia'),(37,'Can add khuyen mai',10,'add_khuyenmai'),(38,'Can change khuyen mai',10,'change_khuyenmai'),(39,'Can delete khuyen mai',10,'delete_khuyenmai'),(40,'Can view khuyen mai',10,'view_khuyenmai'),(41,'Can add shipper',11,'add_shipper'),(42,'Can change shipper',11,'change_shipper'),(43,'Can delete shipper',11,'delete_shipper'),(44,'Can view shipper',11,'view_shipper'),(45,'Can add hoa don',12,'add_hoadon'),(46,'Can change hoa don',12,'change_hoadon'),(47,'Can delete hoa don',12,'delete_hoadon'),(48,'Can view hoa don',12,'view_hoadon'),(49,'Can add danh gia shipper',13,'add_danhgiashipper'),(50,'Can change danh gia shipper',13,'change_danhgiashipper'),(51,'Can delete danh gia shipper',13,'delete_danhgiashipper'),(52,'Can view danh gia shipper',13,'view_danhgiashipper'),(53,'Can add application',14,'add_application'),(54,'Can change application',14,'change_application'),(55,'Can delete application',14,'delete_application'),(56,'Can view application',14,'view_application'),(57,'Can add access token',15,'add_accesstoken'),(58,'Can change access token',15,'change_accesstoken'),(59,'Can delete access token',15,'delete_accesstoken'),(60,'Can view access token',15,'view_accesstoken'),(61,'Can add grant',16,'add_grant'),(62,'Can change grant',16,'change_grant'),(63,'Can delete grant',16,'delete_grant'),(64,'Can view grant',16,'view_grant'),(65,'Can add refresh token',17,'add_refreshtoken'),(66,'Can change refresh token',17,'change_refreshtoken'),(67,'Can delete refresh token',17,'delete_refreshtoken'),(68,'Can view refresh token',17,'view_refreshtoken'),(69,'Can add id token',18,'add_idtoken'),(70,'Can change id token',18,'change_idtoken'),(71,'Can delete id token',18,'delete_idtoken'),(72,'Can view id token',18,'view_idtoken'),(73,'Can add don hang',19,'add_donhang'),(74,'Can change don hang',19,'change_donhang'),(75,'Can delete don hang',19,'delete_donhang'),(76,'Can view don hang',19,'view_donhang'),(77,'Can add association',20,'add_association'),(78,'Can change association',20,'change_association'),(79,'Can delete association',20,'delete_association'),(80,'Can view association',20,'view_association'),(81,'Can add code',21,'add_code'),(82,'Can change code',21,'change_code'),(83,'Can delete code',21,'delete_code'),(84,'Can view code',21,'view_code'),(85,'Can add nonce',22,'add_nonce'),(86,'Can change nonce',22,'change_nonce'),(87,'Can delete nonce',22,'delete_nonce'),(88,'Can view nonce',22,'view_nonce'),(89,'Can add user social auth',23,'add_usersocialauth'),(90,'Can change user social auth',23,'change_usersocialauth'),(91,'Can delete user social auth',23,'delete_usersocialauth'),(92,'Can view user social auth',23,'view_usersocialauth'),(93,'Can add partial',24,'add_partial'),(94,'Can change partial',24,'change_partial'),(95,'Can delete partial',24,'delete_partial'),(96,'Can view partial',24,'view_partial');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8mb4_unicode_ci,
  `object_repr` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_giaohang_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2021-10-26 14:25:11.568430','1','KhachHang',1,'[{\"added\": {}}]',3,1),(2,'2021-10-26 14:25:19.085279','2','Shipper',1,'[{\"added\": {}}]',3,1),(3,'2021-10-26 14:25:42.317280','3','Admin',1,'[{\"added\": {}}]',3,1),(4,'2021-10-26 14:31:00.872364','3','shipper',2,'[{\"changed\": {\"fields\": [\"Access\"]}}]',11,1),(5,'2021-10-26 14:44:39.140363','1','admin',2,'[{\"changed\": {\"fields\": [\"Groups\", \"So dien thoai\"]}}]',6,1),(6,'2021-10-26 14:46:51.732480','4','tuan',1,'[{\"added\": {}}]',6,1),(7,'2021-10-26 14:53:35.288131','1','Food',1,'[{\"added\": {}}]',8,1),(8,'2021-10-26 14:54:14.077643','2','Fragile',1,'[{\"added\": {}}]',8,1),(9,'2021-10-26 14:54:40.122162','3','Letter',1,'[{\"added\": {}}]',8,1),(10,'2021-10-26 14:57:49.965251','1','DauGia object (1)',1,'[{\"added\": {}}]',9,1),(11,'2021-10-26 23:28:32.842335','1','BaiDang object (1)',2,'[{\"changed\": {\"fields\": [\"Active\"]}}]',7,1),(12,'2021-10-26 23:41:08.043064','1','DonHang object (1)',1,'[{\"added\": {}}]',19,1),(13,'2021-10-26 23:41:27.908295','1','HoaDon object (1)',1,'[{\"added\": {}}]',12,1),(14,'2021-10-26 23:41:44.196194','1','DanhGiaShipper object (1)',1,'[{\"added\": {}}]',13,1),(15,'2021-10-27 00:01:06.259074','1','BaiDang object (1)',2,'[{\"changed\": {\"fields\": [\"Da chon shipper\"]}}]',7,1),(16,'2021-10-27 00:02:55.987773','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(17,'2021-10-27 00:03:55.479866','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(18,'2021-10-27 00:04:39.015677','2','DauGia object (2)',1,'[{\"added\": {}}]',9,1),(19,'2021-10-27 00:05:05.435727','2','DonHang object (2)',1,'[{\"added\": {}}]',19,1),(20,'2021-10-27 00:06:08.513853','2','HoaDon object (2)',1,'[{\"added\": {}}]',12,1),(21,'2021-10-27 00:06:29.000724','2','DanhGiaShipper object (2)',1,'[{\"added\": {}}]',13,1),(22,'2021-10-27 00:22:05.203811','5','shipper1',2,'[{\"changed\": {\"fields\": [\"Access\"]}}]',11,1),(23,'2021-10-27 08:09:39.579142','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(24,'2021-10-27 08:09:44.610599','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(25,'2021-10-27 08:12:32.155948','2','DonHang object (2)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(26,'2021-10-27 08:12:37.103855','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(27,'2021-10-27 13:33:16.906355','3','DauGia object (3)',1,'[{\"added\": {}}]',9,1),(28,'2021-10-27 13:33:28.636745','3','DauGia object (3)',2,'[]',9,1),(29,'2021-10-27 13:35:29.886859','3','DauGia object (3)',2,'[{\"changed\": {\"fields\": [\"Bai dang\"]}}]',9,1),(30,'2021-10-27 13:56:54.887478','3','DonHang object (3)',2,'[{\"changed\": {\"fields\": [\"Shipper\"]}}]',19,1),(31,'2021-10-27 13:58:14.563279','3','DonHang object (3)',2,'[{\"changed\": {\"fields\": [\"Shipper\"]}}]',19,1),(32,'2021-10-28 00:49:11.754437','1','DonHang object (1)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(33,'2021-10-28 09:12:26.889445','4','DauGia object (4)',1,'[{\"added\": {}}]',9,1),(34,'2021-10-28 10:12:29.620822','19','6ixLMCaIROQm9QTIY2spHpBUPd7o2O',3,'',15,1),(35,'2021-10-28 10:12:29.623095','18','PFRBBLBvJ7tW35ERLDue9h41jbdVIu',3,'',15,1),(36,'2021-10-28 10:12:29.624596','17','aZwj5lAK5sJS1gyJUDQ69yTQzuSp6q',3,'',15,1),(37,'2021-10-28 10:12:29.626096','16','79WwgXUtSi8WXPWPyBCzgkwVX5DTLB',3,'',15,1),(38,'2021-10-28 10:12:29.627603','15','CfukZbEjNt0gY6zQEbNI1fRGkxC4H3',3,'',15,1),(39,'2021-10-28 10:12:29.629088','14','DcsU2yLMnmXzrpe3U8KPZDe7AB2OEI',3,'',15,1),(40,'2021-10-28 10:12:29.630588','13','FXQq5IeVrhKK6lxvnD7FYvvoRqEVdU',3,'',15,1),(41,'2021-10-28 10:12:29.632090','12','q1j4qCx4hjqnVgrsVPNsclFHzVo2Zy',3,'',15,1),(42,'2021-10-28 10:12:29.633697','11','JMT9kpJFGGwPLkWXDnimaDGQOAjsMv',3,'',15,1),(43,'2021-10-28 10:12:29.634606','10','ftNSMkzRCOjDOPyXveQttpnJ7qwQiK',3,'',15,1),(44,'2021-10-28 10:12:29.636064','9','jjjoFUHmBfZ3pUOOt3s0I1mmRW9DF8',3,'',15,1),(45,'2021-10-28 10:12:29.637237','8','RwKM2A39Se46PY8lHAyd81TwwosVNH',3,'',15,1),(46,'2021-10-28 10:12:29.638239','7','iLQsH8BerRf070fh32G2BcaMkxMM3s',3,'',15,1),(47,'2021-10-28 10:12:29.639436','6','IVFPLcIwwb4JRzaqIkHtYVTeF4e6JJ',3,'',15,1),(48,'2021-10-28 10:12:29.640679','5','vd4RbtYSo5bNs0dplgFdZ02HBMA99m',3,'',15,1),(49,'2021-10-28 10:12:29.641680','4','zkVMksvIuQDef7MDBGpR5IJrS8YBe9',3,'',15,1),(50,'2021-10-28 10:12:29.643135','3','662ymRHw0AzO5vh8NO2YCV6jS7ghrC',3,'',15,1),(51,'2021-10-28 10:12:29.644136','2','0wcGbUbspYfsyXO7dLMtqPNMoL8oXs',3,'',15,1),(52,'2021-10-28 10:12:29.645636','1','WcCtf5V23Oo59yRSONYj5Ofi20XJKd',3,'',15,1),(53,'2021-10-28 10:12:38.381673','19','5DrQ8F1Gak0ofdYijB5b60e4wkPMck',3,'',17,1),(54,'2021-10-28 10:12:38.383904','18','7QwrajcZuxDPy4CULoUwTDCiGRlk6Q',3,'',17,1),(55,'2021-10-28 10:12:38.385011','17','HZj6Hcfp1VR5JvpbKMW8XoQzBgOTNr',3,'',17,1),(56,'2021-10-28 10:12:38.386287','16','bRndvl6rBejsOeaFrr8IEXGpYO4HPC',3,'',17,1),(57,'2021-10-28 10:12:38.387796','15','QX47hJ17UhGnsfES2ED4RrgHoFZojo',3,'',17,1),(58,'2021-10-28 10:12:38.389290','14','Q52N1zHIWwP7zKbW1IV6Sf33W3x2fs',3,'',17,1),(59,'2021-10-28 10:12:38.390788','13','s6tZe53Z8rGONySTS2CEDCP7rMUw0y',3,'',17,1),(60,'2021-10-28 10:12:38.391851','12','597hGsr2z7SyW97Zg7wMWTapfTTzsp',3,'',17,1),(61,'2021-10-28 10:12:38.393368','11','1XcDuXbLbvyfxfmEWtjHLahTT2eYPl',3,'',17,1),(62,'2021-10-28 10:12:38.394353','10','MDNADoTaBALu7Nrmz5ONmyesLDvJOd',3,'',17,1),(63,'2021-10-28 10:12:38.396012','9','bb1x6Z7Cj30iGt9Z7SXbFUegiHZZXe',3,'',17,1),(64,'2021-10-28 10:12:38.397526','8','8aSSFWdnyug7jG5i6Q2DAxGKGJlEo2',3,'',17,1),(65,'2021-10-28 10:12:38.398713','7','gCR8oBEp8GwAUn1Zk8bNaT4JGYNg86',3,'',17,1),(66,'2021-10-28 10:12:38.399756','6','xSjofdnxZI30aZoTMTxLDz8w9I716O',3,'',17,1),(67,'2021-10-28 10:12:38.400781','5','kmGoybwqeYLhM5o4pNiH9iyL9pylJQ',3,'',17,1),(68,'2021-10-28 10:12:38.401856','4','mvfmoW5FESD8Qirsh3ENJTreafeY0H',3,'',17,1),(69,'2021-10-28 10:12:38.402951','3','u9GOfyspBLrSv4X2BaihKhsdPrHwvD',3,'',17,1),(70,'2021-10-28 10:12:38.403953','2','q8LU5fdCbK6ChyzvgLzHuKsmjyROfR',3,'',17,1),(71,'2021-10-28 10:12:38.405746','1','nBWlZPMkwUkrZPmyEQw7iw5q7Iulog',3,'',17,1),(72,'2021-10-28 17:53:16.369567','1','KhuyenMai object (1)',1,'[{\"added\": {}}]',10,1),(73,'2021-10-28 17:53:31.165924','5','DonHang object (5)',2,'[{\"changed\": {\"fields\": [\"Giam gia\"]}}]',19,1),(74,'2021-10-28 18:15:19.301547','5','DauGia object (5)',1,'[{\"added\": {}}]',9,1),(75,'2021-10-29 22:04:32.333382','6','DauGia object (6)',1,'[{\"added\": {}}]',9,1),(76,'2021-10-30 12:34:36.035863','3','HoaDon object (3)',1,'[{\"added\": {}}]',12,1),(77,'2021-11-02 22:39:24.608280','7','BaiDang object (7)',1,'[{\"added\": {}}]',7,1),(78,'2021-11-04 13:09:05.876621','7','DonHang object (7)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(79,'2021-11-05 11:23:38.264669','7','DauGia object (7)',1,'[{\"added\": {}}]',9,1),(80,'2021-11-05 12:02:08.249296','8','DonHang object (8)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(81,'2021-11-05 12:02:40.559320','8','DonHang object (8)',2,'[{\"changed\": {\"fields\": [\"Hoan thanh\"]}}]',19,1),(82,'2021-11-05 12:07:15.861092','3','HoaDon object (3)',2,'[{\"changed\": {\"fields\": [\"Don hang\"]}}]',12,1),(83,'2021-11-05 14:30:46.230681','8','DauGia object (8)',1,'[{\"added\": {}}]',9,1),(84,'2021-11-05 15:02:27.656493','9','DauGia object (9)',2,'[{\"changed\": {\"fields\": [\"Gia giao hang km\"]}}]',9,1),(85,'2021-11-05 23:37:05.848668','7','BaiDang object (7)',2,'[{\"changed\": {\"fields\": [\"Active\"]}}]',7,1),(86,'2021-11-12 16:49:57.967190','3','shipper',2,'[{\"changed\": {\"fields\": [\"Access\"]}}]',11,1),(87,'2021-11-14 14:31:51.285296','1','admin',2,'[{\"changed\": {\"fields\": [\"Groups\"]}}]',6,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(7,'giaohang','baidang'),(8,'giaohang','category'),(13,'giaohang','danhgiashipper'),(9,'giaohang','daugia'),(19,'giaohang','donhang'),(12,'giaohang','hoadon'),(10,'giaohang','khuyenmai'),(11,'giaohang','shipper'),(6,'giaohang','user'),(15,'oauth2_provider','accesstoken'),(14,'oauth2_provider','application'),(16,'oauth2_provider','grant'),(18,'oauth2_provider','idtoken'),(17,'oauth2_provider','refreshtoken'),(5,'sessions','session'),(20,'social_django','association'),(21,'social_django','code'),(22,'social_django','nonce'),(24,'social_django','partial'),(23,'social_django','usersocialauth');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-10-26 14:21:29.822193'),(2,'contenttypes','0002_remove_content_type_name','2021-10-26 14:21:29.885401'),(3,'auth','0001_initial','2021-10-26 14:21:30.077142'),(4,'auth','0002_alter_permission_name_max_length','2021-10-26 14:21:30.121215'),(5,'auth','0003_alter_user_email_max_length','2021-10-26 14:21:30.127767'),(6,'auth','0004_alter_user_username_opts','2021-10-26 14:21:30.135255'),(7,'auth','0005_alter_user_last_login_null','2021-10-26 14:21:30.141121'),(8,'auth','0006_require_contenttypes_0002','2021-10-26 14:21:30.144189'),(9,'auth','0007_alter_validators_add_error_messages','2021-10-26 14:21:30.171995'),(10,'auth','0008_alter_user_username_max_length','2021-10-26 14:21:30.179732'),(11,'auth','0009_alter_user_last_name_max_length','2021-10-26 14:21:30.184733'),(12,'auth','0010_alter_group_name_max_length','2021-10-26 14:21:30.198521'),(13,'auth','0011_update_proxy_permissions','2021-10-26 14:21:30.204227'),(14,'auth','0012_alter_user_first_name_max_length','2021-10-26 14:21:30.210228'),(15,'giaohang','0001_initial','2021-10-26 14:21:31.218266'),(16,'admin','0001_initial','2021-10-26 14:21:31.345768'),(17,'admin','0002_logentry_remove_auto_add','2021-10-26 14:21:31.355770'),(18,'admin','0003_logentry_add_action_flag_choices','2021-10-26 14:21:31.364925'),(19,'oauth2_provider','0001_initial','2021-10-26 14:21:31.955868'),(20,'oauth2_provider','0002_auto_20190406_1805','2021-10-26 14:21:32.013075'),(21,'oauth2_provider','0003_auto_20201211_1314','2021-10-26 14:21:32.070871'),(22,'oauth2_provider','0004_auto_20200902_2022','2021-10-26 14:21:32.411828'),(23,'sessions','0001_initial','2021-10-26 14:21:32.437437'),(24,'giaohang','0002_auto_20211026_2142','2021-10-26 14:42:09.334932'),(25,'giaohang','0003_auto_20211027_0634','2021-10-26 23:34:15.158066'),(26,'giaohang','0004_auto_20211029_0036','2021-10-28 17:36:17.863046'),(27,'giaohang','0005_alter_donhang_shipper','2021-11-05 11:54:51.032824'),(28,'giaohang','0006_auto_20211105_2202','2021-11-05 15:02:18.069266'),(29,'default','0001_initial','2021-11-14 07:58:34.487758'),(30,'social_auth','0001_initial','2021-11-14 07:58:34.491283'),(31,'default','0002_add_related_name','2021-11-14 07:58:34.505792'),(32,'social_auth','0002_add_related_name','2021-11-14 07:58:34.508652'),(33,'default','0003_alter_email_max_length','2021-11-14 07:58:34.519251'),(34,'social_auth','0003_alter_email_max_length','2021-11-14 07:58:34.522195'),(35,'default','0004_auto_20160423_0400','2021-11-14 07:58:34.533548'),(36,'social_auth','0004_auto_20160423_0400','2021-11-14 07:58:34.536346'),(37,'social_auth','0005_auto_20160727_2333','2021-11-14 07:58:34.551888'),(38,'social_django','0006_partial','2021-11-14 07:58:34.583649'),(39,'social_django','0007_code_timestamp','2021-11-14 07:58:34.617102'),(40,'social_django','0008_partial_timestamp','2021-11-14 07:58:34.645735'),(41,'social_django','0009_auto_20191118_0520','2021-11-14 07:58:34.708997'),(42,'social_django','0010_uid_db_index','2021-11-14 07:58:34.732595'),(43,'social_django','0005_auto_20160727_2333','2021-11-14 07:58:34.737088'),(44,'social_django','0002_add_related_name','2021-11-14 07:58:34.740090'),(45,'social_django','0001_initial','2021-11-14 07:58:34.742589'),(46,'social_django','0004_auto_20160423_0400','2021-11-14 07:58:34.745590'),(47,'social_django','0003_alter_email_max_length','2021-11-14 07:58:34.747810');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2u2gc6tvvql8tgueblfhl3b00zhjeui1','.eJxVjDsOwjAQBe_iGlk2ix2bkj5niPYXEkC2FCcV4u4oUgpo38y8txlwW6dha7oMs5irAXP63Qj5qWUH8sByr5ZrWZeZ7K7YgzbbV9HX7XD_DiZs014zsfP-HDMHuqiMPgFQ9LmjmHAUyEmzpCBAzsWIHUin5CUEFsBRzecL9FY4mA:1mj0Ro:R8lS4g4ADetFSjHeUGTQLo0j6ZADyajOtvZO0XQgM64','2021-11-19 14:44:04.609031'),('2uoqd0gvbb5jcdnkt1pbv3re9n49cgvr','.eJxVjEEOwiAQRe_C2pABCrQu3XsGMjCDVA0kpV0Z765NutDtf-_9lwi4rSVsnZcwkzgLLU6_W8T04LoDumO9NZlaXZc5yl2RB-3y2oifl8P9OyjYy7cGzY5y1lY5ox0bitFPyNnaEcGSGpRFmLwes2c2zgB6UEDsIqUhaiPeH9_WN8E:1mfijd:l1vsd34XMMc4cK9rxPn9v9fnEoa_RT0FvB0VZYMZU_E','2021-11-10 13:12:53.543731'),('41gxppngioku7sytjcvk8clszn620sbl','.eJxVjEEOwiAQRe_C2hBminVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlCnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb98DO2-DpQjaINeS7AEjMSXrBDYE4iQmTgAG0JqEjSqFDY8XimdTnC_UyN_g:1mix9v:WXqLndvCORmRHJ0YpqOUKgeoPtwgrkt597YWSw3iPbI','2021-11-19 11:13:23.899515'),('ayrp1kaf2bxw7j1c9qexwefb3lmnycga','.eJxVjEEOwiAQRe_C2hBminVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlCnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb98DO2-DpQjaINeS7AEjMSXrBDYE4iQmTgAG0JqEjSqFDY8XimdTnC_UyN_g:1mfjQ8:0dXgoaWZnmBsfhTGdM0oMgH0oqs5TGth0c5ovGeR8pw','2021-11-10 13:56:48.130376'),('d5iq869zc5k5iwrylblrpuh0qvbanmxu','.eJxVjEEOwiAQRe_C2hBminVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlCnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb98DO2-DpQjaINeS7AEjMSXrBDYE4iQmTgAG0JqEjSqFDY8XimdTnC_UyN_g:1micRk:WYcMxdkh5mG54OcipyQzcgYlcTHY9v3gtGmHJLWTPog','2021-11-18 13:06:24.649441'),('e8swp4xovp95fpbs9xqvdoni5fgjbqi1','.eJxVjEEOwiAQRe_C2hBminVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlCnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb98DO2-DpQjaINeS7AEjMSXrBDYE4iQmTgAG0JqEjSqFDY8XimdTnC_UyN_g:1mlRbD:eEqhh_1zD05Sy_phdA1lMdYuZwVAxOiPkm3WufOUZag','2021-11-26 08:07:51.022668'),('kj18x3bxuu2r8tcdo4eslqb52r3s2tvu','.eJxVjDsOwjAQBe_iGlk2ix2bkj5niPYXEkC2FCcV4u4oUgpo38y8txlwW6dha7oMs5irAXP63Qj5qWUH8sByr5ZrWZeZ7K7YgzbbV9HX7XD_DiZs014zsfP-HDMHuqiMPgFQ9LmjmHAUyEmzpCBAzsWIHUin5CUEFsBRzecL9FY4mA:1mg9Lg:Rkw670kSOQEszLWZC3a_AHYBoKa0muQSPUH-x2GbEd8','2021-11-11 17:37:56.951006'),('p55g3z865oritijl9n3bkr5mv2oaek2w','.eJxVjEEOwiAQRe_C2hCYjnVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlSnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb95adx-DpQhgEDfkuWCDmJL3Ahqw4iQmSWGMBTQJHlEIHBgXhTOrzBfb9N_s:1mgnSB:303Ew0hlUBJo4Mpze_mqnDk3JsoVXJisSIc1OIfVwt8','2021-11-13 12:27:19.022141'),('vb7rtbivsjbrikbu4g8klech0of3hc6j','.eJxVjEEOwiAQRe_C2hBminVw6b5naAYGpGogKe3KeHfbpAvdvvf-f6uR1yWPa4vzOIm6KlCnX-Y5PGPZhTy43KsOtSzz5PWe6MM2PVSJr9vR_h1kbnlb98DO2-DpQjaINeS7AEjMSXrBDYE4iQmTgAG0JqEjSqFDY8XimdTnC_UyN_g:1mhMMC:wiSNjSSi-KquFdg6TIJTUNtTVZE8i2ZlI_tJBBYCkRo','2021-11-15 01:43:28.304678');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_baidang`
--

DROP TABLE IF EXISTS `giaohang_baidang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_baidang` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `so_km` decimal(5,2) NOT NULL,
  `dia_chi_giao` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `dia_chi_nhan` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `da_chon_shipper` tinyint(1) NOT NULL,
  `mo_ta` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint DEFAULT NULL,
  `tac_gia_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `giaohang_baidang_category_id_1ef893c8_fk_giaohang_category_id` (`category_id`),
  KEY `giaohang_baidang_tac_gia_id_ffcbd869_fk_giaohang_user_id` (`tac_gia_id`),
  CONSTRAINT `giaohang_baidang_category_id_1ef893c8_fk_giaohang_category_id` FOREIGN KEY (`category_id`) REFERENCES `giaohang_category` (`id`),
  CONSTRAINT `giaohang_baidang_tac_gia_id_ffcbd869_fk_giaohang_user_id` FOREIGN KEY (`tac_gia_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_baidang`
--

LOCK TABLES `giaohang_baidang` WRITE;
/*!40000 ALTER TABLE `giaohang_baidang` DISABLE KEYS */;
INSERT INTO `giaohang_baidang` VALUES (1,'2021-10-26 14:55:37.727121','2021-10-27 00:01:06.256074',1,5.00,'27 Phan Dinh Phung','27 Phan Dinh Phung',1,'Test',1,4),(2,'2021-10-27 00:04:14.944524','2021-10-28 09:00:35.156347',1,2.00,'1','1',1,'Test',2,4),(3,'2021-10-27 13:35:02.042178','2021-10-27 13:41:57.223444',1,12.00,'Test','Test',1,'Test',3,4),(4,'2021-10-28 09:10:31.073199','2021-10-28 09:12:41.126081',1,1.00,'1','1',1,'Test',3,4),(5,'2021-10-28 17:42:36.096614','2021-10-29 22:01:06.074913',1,2.00,'1','1',1,'Test',3,4),(6,'2021-10-29 22:02:27.228033','2021-10-29 22:04:45.096381',1,1.00,'1','1',1,'Tesst nua',2,4),(7,'2021-11-02 22:39:24.606266','2021-11-13 16:13:17.136110',1,1.00,'1','1',1,'Hhaha',2,4),(8,'2021-11-13 16:15:52.639569','2021-11-13 16:18:22.437743',1,1.00,'1','1',1,'Test',2,4),(9,'2021-11-13 16:19:34.186683','2021-11-13 16:20:09.139082',1,1.00,'1','1',1,'1',3,4);
/*!40000 ALTER TABLE `giaohang_baidang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_category`
--

DROP TABLE IF EXISTS `giaohang_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `subject` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subject` (`subject`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_category`
--

LOCK TABLES `giaohang_category` WRITE;
/*!40000 ALTER TABLE `giaohang_category` DISABLE KEYS */;
INSERT INTO `giaohang_category` VALUES (1,'Food'),(2,'Fragile'),(3,'Letter');
/*!40000 ALTER TABLE `giaohang_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_danhgiashipper`
--

DROP TABLE IF EXISTS `giaohang_danhgiashipper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_danhgiashipper` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `diem_danh_gia` int DEFAULT NULL,
  `binh_luan` longtext COLLATE utf8mb4_unicode_ci,
  `hoa_don_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `giaohang_danhgiashipper_hoa_don_id_3105df4a_uniq` (`hoa_don_id`),
  CONSTRAINT `giaohang_danhgiaship_hoa_don_id_3105df4a_fk_giaohang_` FOREIGN KEY (`hoa_don_id`) REFERENCES `giaohang_hoadon` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_danhgiashipper`
--

LOCK TABLES `giaohang_danhgiashipper` WRITE;
/*!40000 ALTER TABLE `giaohang_danhgiashipper` DISABLE KEYS */;
INSERT INTO `giaohang_danhgiashipper` VALUES (1,'2021-10-26 23:41:44.194864','2021-10-26 23:41:44.194864',1,5,'Giao Hang Con Cham',1),(2,'2021-10-27 00:06:28.999220','2021-11-01 02:29:52.910246',1,4,'Giao Hàng quá chậm',2),(3,'2021-11-01 02:15:25.052220','2021-11-01 02:15:25.054964',1,5,'Giao Hàng quá ok',3),(4,'2021-11-05 12:21:28.237933','2021-11-05 14:42:28.697508',1,3,'ok',4);
/*!40000 ALTER TABLE `giaohang_danhgiashipper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_daugia`
--

DROP TABLE IF EXISTS `giaohang_daugia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_daugia` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `gia_giao_hang_km` decimal(9,2) NOT NULL,
  `binh_luan` longtext COLLATE utf8mb4_unicode_ci,
  `bai_dang_id` bigint NOT NULL,
  `shipper_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `giaohang_daugia_shipper_id_d43b0903_fk_giaohang_shipper_user_id` (`shipper_id`),
  KEY `giaohang_daugia_bai_dang_id_00b622ac_fk_giaohang_baidang_id` (`bai_dang_id`),
  CONSTRAINT `giaohang_daugia_bai_dang_id_00b622ac_fk_giaohang_baidang_id` FOREIGN KEY (`bai_dang_id`) REFERENCES `giaohang_baidang` (`id`),
  CONSTRAINT `giaohang_daugia_shipper_id_d43b0903_fk_giaohang_shipper_user_id` FOREIGN KEY (`shipper_id`) REFERENCES `giaohang_shipper` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_daugia`
--

LOCK TABLES `giaohang_daugia` WRITE;
/*!40000 ALTER TABLE `giaohang_daugia` DISABLE KEYS */;
INSERT INTO `giaohang_daugia` VALUES (1,'2021-10-26 14:57:49.964176','2021-10-26 14:57:49.964176',1,10000.00,'Tui lấy giá bao rẻ',1,3),(2,'2021-10-27 00:04:39.012835','2021-10-27 00:04:39.013335',1,10000.00,'Cam Ket Gia Re',2,3),(3,'2021-10-27 13:33:16.903384','2021-10-27 13:35:29.883357',1,10000.00,'Test',3,3),(4,'2021-10-28 09:12:26.886583','2021-10-28 09:12:26.886583',1,10000.00,'11',4,5),(5,'2021-10-28 18:15:19.299211','2021-10-28 18:15:19.299211',1,10000.00,'1',5,3),(6,'2021-10-29 22:04:32.331881','2021-10-29 22:04:32.331881',1,10000.00,'Tesst',6,5),(7,'2021-11-05 11:23:38.261643','2021-11-05 11:23:38.261643',1,10000.00,'Test',7,3),(8,'2021-11-05 14:30:46.227434','2021-11-05 14:30:46.227934',1,10000.00,'1',7,5),(9,'2021-11-05 14:58:48.319420','2021-11-05 15:02:27.654516',1,1000000.00,'cha co gi',7,5),(10,'2021-11-05 15:17:57.137762','2021-11-05 15:17:57.140761',1,20000.00,'Gia rat re',7,3),(11,'2021-11-13 16:18:07.370212','2021-11-13 16:18:07.380704',1,10000.00,'Test',8,3),(12,'2021-11-13 16:19:56.230772','2021-11-13 16:19:56.233272',1,10000.00,'test',9,3);
/*!40000 ALTER TABLE `giaohang_daugia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_donhang`
--

DROP TABLE IF EXISTS `giaohang_donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_donhang` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `hoan_thanh` tinyint(1) NOT NULL,
  `dau_gia_duoc_chon_id` bigint DEFAULT NULL,
  `shipper_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `bai_dang_id` bigint DEFAULT NULL,
  `giam_gia_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `giaohang_donhang_dau_gia_duoc_chon_id_e364a619_fk_giaohang_` (`dau_gia_duoc_chon_id`),
  KEY `giaohang_donhang_shipper_id_478efd94_fk_giaohang_shipper_user_id` (`shipper_id`),
  KEY `giaohang_donhang_user_id_0e77837d_fk_giaohang_user_id` (`user_id`),
  KEY `giaohang_donhang_bai_dang_id_7bbe294d_fk_giaohang_baidang_id` (`bai_dang_id`),
  KEY `giaohang_donhang_giam_gia_id_9e757c90_fk_giaohang_khuyenmai_id` (`giam_gia_id`),
  CONSTRAINT `giaohang_donhang_bai_dang_id_7bbe294d_fk_giaohang_baidang_id` FOREIGN KEY (`bai_dang_id`) REFERENCES `giaohang_baidang` (`id`),
  CONSTRAINT `giaohang_donhang_dau_gia_duoc_chon_id_e364a619_fk_giaohang_` FOREIGN KEY (`dau_gia_duoc_chon_id`) REFERENCES `giaohang_daugia` (`id`),
  CONSTRAINT `giaohang_donhang_giam_gia_id_9e757c90_fk_giaohang_khuyenmai_id` FOREIGN KEY (`giam_gia_id`) REFERENCES `giaohang_khuyenmai` (`id`),
  CONSTRAINT `giaohang_donhang_shipper_id_478efd94_fk_giaohang_shipper_user_id` FOREIGN KEY (`shipper_id`) REFERENCES `giaohang_shipper` (`user_id`),
  CONSTRAINT `giaohang_donhang_user_id_0e77837d_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_donhang`
--

LOCK TABLES `giaohang_donhang` WRITE;
/*!40000 ALTER TABLE `giaohang_donhang` DISABLE KEYS */;
INSERT INTO `giaohang_donhang` VALUES (1,'2021-10-26 23:41:08.040719','2021-10-28 00:49:11.752596',1,1,1,3,4,1,NULL),(2,'2021-10-27 00:05:05.433726','2021-10-27 08:12:32.154447',1,0,2,3,4,2,NULL),(3,'2021-10-27 13:41:57.218653','2021-10-27 13:59:05.836050',1,1,3,3,4,3,NULL),(4,'2021-10-28 09:00:35.151846','2021-10-28 09:00:35.158847',1,0,2,3,4,2,NULL),(5,'2021-10-28 09:12:41.123580','2021-10-28 17:53:31.163920',1,0,4,5,4,4,1),(6,'2021-10-29 21:59:19.259156','2021-11-04 14:42:37.764531',1,1,5,3,4,5,NULL),(7,'2021-10-29 22:01:06.069412','2021-11-04 13:24:04.644951',1,1,5,3,4,5,1),(8,'2021-10-29 22:04:45.091876','2021-11-05 12:02:40.557385',1,0,6,5,4,6,NULL),(9,'2021-11-13 16:13:17.131868','2021-11-13 16:13:17.139112',1,0,10,3,4,7,1),(10,'2021-11-13 16:18:19.382251','2021-11-13 16:18:22.440243',1,0,11,3,4,8,NULL),(11,'2021-11-13 16:20:06.511329','2021-11-13 16:24:12.345742',1,1,12,3,4,9,1);
/*!40000 ALTER TABLE `giaohang_donhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_hoadon`
--

DROP TABLE IF EXISTS `giaohang_hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_hoadon` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `tong_gia` decimal(9,2) NOT NULL,
  `don_hang_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `giaohang_hoadon_don_hang_id_1e12c2a9_fk_giaohang_donhang_id` (`don_hang_id`),
  CONSTRAINT `giaohang_hoadon_don_hang_id_1e12c2a9_fk_giaohang_donhang_id` FOREIGN KEY (`don_hang_id`) REFERENCES `giaohang_donhang` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_hoadon`
--

LOCK TABLES `giaohang_hoadon` WRITE;
/*!40000 ALTER TABLE `giaohang_hoadon` DISABLE KEYS */;
INSERT INTO `giaohang_hoadon` VALUES (1,'2021-10-26 23:41:27.905602','2021-10-26 23:41:27.905602',1,10000.00,1),(2,'2021-10-27 00:06:08.512447','2021-10-27 00:06:08.512447',1,10000.00,2),(3,'2021-10-30 12:34:36.034745','2021-11-05 12:07:15.858194',1,10000.00,3),(4,'2021-11-04 13:24:04.639029','2021-11-04 13:24:04.643539',1,14000.00,7),(5,'2021-11-04 14:42:37.758875','2021-11-04 14:42:37.762359',1,20000.00,6),(6,'2021-11-13 16:24:09.780841','2021-11-13 16:24:12.343061',1,7000.00,11);
/*!40000 ALTER TABLE `giaohang_hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_khuyenmai`
--

DROP TABLE IF EXISTS `giaohang_khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_khuyenmai` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_date` datetime(6) NOT NULL,
  `updated_date` datetime(6) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `noi_dung` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `giam_gia` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_khuyenmai`
--

LOCK TABLES `giaohang_khuyenmai` WRITE;
/*!40000 ALTER TABLE `giaohang_khuyenmai` DISABLE KEYS */;
INSERT INTO `giaohang_khuyenmai` VALUES (1,'2021-10-28 17:53:16.367053','2021-10-28 17:53:16.367053',1,'Discount 30%',30);
/*!40000 ALTER TABLE `giaohang_khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_shipper`
--

DROP TABLE IF EXISTS `giaohang_shipper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_shipper` (
  `user_id` bigint NOT NULL,
  `cmnd` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access` tinyint(1) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `cmnd` (`cmnd`),
  CONSTRAINT `giaohang_shipper_user_id_2ed0b12f_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_shipper`
--

LOCK TABLES `giaohang_shipper` WRITE;
/*!40000 ALTER TABLE `giaohang_shipper` DISABLE KEYS */;
INSERT INTO `giaohang_shipper` VALUES (3,'026020643','static/uploads/2021/11/IMG_4229.PNG',1),(5,'025020642','static/uploads/2021/11/Gaming_5000x3125.jpg',1),(6,'026020645','static/uploads/2021/11/IMG_3119.PNG',1);
/*!40000 ALTER TABLE `giaohang_shipper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_user`
--

DROP TABLE IF EXISTS `giaohang_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `so_dien_thoai` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(254) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_user`
--

LOCK TABLES `giaohang_user` WRITE;
/*!40000 ALTER TABLE `giaohang_user` DISABLE KEYS */;
INSERT INTO `giaohang_user` VALUES (1,'pbkdf2_sha256$260000$dFD4nnXdXbTxqjqCY6xj0T$HJUjlCbqFvxz+59zywkJU0/7Hl892vk/oYubQtScyHg=','2021-11-12 08:07:51.000000',1,'admin','','',1,1,'2021-10-26 14:23:14.000000','0363902003','mr.tuan1749@gmail.com'),(2,'pbkdf2_sha256$260000$IQBoKU9HNXbv3namBq2kgF$XjUMy+TVsnC7ukXNQr1Sk39Hiev0rsSEdpURrz7fh48=','2021-10-27 13:12:53.541232',0,'tuan1','','',0,1,'2021-10-26 14:26:05.147227','0363902003','mr.tuan1749@gmail.com'),(3,'pbkdf2_sha256$260000$aWH1wGnwdBVGMYiqGC4vmq$SQxhtVMlQRcQmXvRHK31e5kGL0q30q5T9+o+JK+MEOg=','2021-11-05 14:44:04.606720',0,'shipper','tuan','pham',0,1,'2021-10-26 14:30:31.549868','0363902003','mr.tuan1749@gmail.com'),(4,'pbkdf2_sha256$260000$GabnrnV8Rt6g3g7hb5BOU3$0QtWYDy/SiKL7H11/8GKtcgilllVMl9Qe0d1ToH6QKo=','2021-11-01 01:43:17.278043',0,'tuan','Phạm','Tuân',0,1,'2021-10-26 14:46:25.000000','0363902004','1851050167tuan@ou.edu.vn'),(5,'pbkdf2_sha256$260000$To3Velh78Ko8VChhuPAiXn$yq9VYiUcOTEJt8rrDSYApzxWLcZhjm5MtWngN9Z7+Gg=',NULL,0,'shipper1','tuan','pham',0,1,'2021-10-27 00:21:32.275221','0363902003','mr.tuan1749@gmail.com'),(6,'pbkdf2_sha256$260000$LCM28d6O06mrFOyuEFPHb0$Wto3d3/h1Ay3B0dl18K9hDwd9XYudEPuEed/ML7wm3E=',NULL,0,'shipper2','','',0,1,'2021-11-12 16:30:11.050675','0363902003','mr.tuan1749@gmail.com'),(7,'!ptVLAaBLjTWlf2IoRdPMwFrfciWI8wbJvWoY9Nrv',NULL,0,'mr.tuan1749','Tuân','Phạm',0,1,'2021-11-14 08:19:36.676835','','mr.tuan1749@gmail.com');
/*!40000 ALTER TABLE `giaohang_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_user_groups`
--

DROP TABLE IF EXISTS `giaohang_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `giaohang_user_groups_user_id_group_id_6b4cb1c8_uniq` (`user_id`,`group_id`),
  KEY `giaohang_user_groups_group_id_31f3067c_fk_auth_group_id` (`group_id`),
  CONSTRAINT `giaohang_user_groups_group_id_31f3067c_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `giaohang_user_groups_user_id_48bd4e15_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_user_groups`
--

LOCK TABLES `giaohang_user_groups` WRITE;
/*!40000 ALTER TABLE `giaohang_user_groups` DISABLE KEYS */;
INSERT INTO `giaohang_user_groups` VALUES (7,1,3),(1,2,1),(2,3,2),(4,4,1),(5,5,2),(6,6,2);
/*!40000 ALTER TABLE `giaohang_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaohang_user_user_permissions`
--

DROP TABLE IF EXISTS `giaohang_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaohang_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `giaohang_user_user_permi_user_id_permission_id_27e20dad_uniq` (`user_id`,`permission_id`),
  KEY `giaohang_user_user_p_permission_id_a2a67896_fk_auth_perm` (`permission_id`),
  CONSTRAINT `giaohang_user_user_p_permission_id_a2a67896_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `giaohang_user_user_p_user_id_8f20cb2d_fk_giaohang_` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaohang_user_user_permissions`
--

LOCK TABLES `giaohang_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `giaohang_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `giaohang_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_accesstoken`
--

DROP TABLE IF EXISTS `oauth2_provider_accesstoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_accesstoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `source_refresh_token_id` bigint DEFAULT NULL,
  `id_token_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `source_refresh_token_id` (`source_refresh_token_id`),
  UNIQUE KEY `id_token_id` (`id_token_id`),
  KEY `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_giaohang_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_acce_id_token_id_85db651b_fk_oauth2_pr` FOREIGN KEY (`id_token_id`) REFERENCES `oauth2_provider_idtoken` (`id`),
  CONSTRAINT `oauth2_provider_acce_source_refresh_token_e66fbc72_fk_oauth2_pr` FOREIGN KEY (`source_refresh_token_id`) REFERENCES `oauth2_provider_refreshtoken` (`id`),
  CONSTRAINT `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_accesstoken`
--

LOCK TABLES `oauth2_provider_accesstoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_accesstoken` VALUES (20,'8HRhS6BMCainEnKAPdfBkpIav6gYyv','2021-10-28 20:12:44.688859','read write',1,4,'2021-10-28 10:12:44.689361','2021-10-28 10:12:44.689361',NULL,NULL),(21,'6Dw6Y3UjOLVEnNowkamRouCldRHnGO','2021-10-29 03:12:29.139181','read write',1,4,'2021-10-28 17:12:29.139681','2021-10-28 17:12:29.139681',NULL,NULL),(22,'9nzocLUoi0T6KALWjU7jxxp0af2y9N','2021-10-30 07:24:29.075366','read write',1,4,'2021-10-29 21:24:29.075866','2021-10-29 21:24:29.075866',NULL,NULL),(23,'AE1yYcQ7tpLDz6Zl2Mb8QQZKhC4KwM','2021-10-30 08:02:10.583902','read write',1,4,'2021-10-29 22:02:10.584403','2021-10-29 22:02:10.584403',NULL,NULL),(24,'NQ5q3q2qPxp8bMkdgChwodLZUuiMBg','2021-10-30 22:25:22.586041','read write',1,4,'2021-10-30 12:25:22.587831','2021-10-30 12:25:22.587831',NULL,NULL),(25,'EBPDZfu3UimvvCGlIiysp8GivpuTaj','2021-11-01 12:02:35.494266','read write',1,4,'2021-11-01 02:02:35.494768','2021-11-01 02:02:35.494768',NULL,NULL),(26,'55swRziZ4zdKynoLMOExZ23155cq5Q','2021-11-01 12:12:02.626579','read write',1,4,'2021-11-01 02:12:02.627080','2021-11-01 02:12:02.627080',NULL,NULL),(27,'oDPWPeiR10xpuAn1FxcUX3rT0q7WLs','2021-11-01 12:47:02.893722','read write',1,3,'2021-11-01 02:47:02.894226','2021-11-01 02:47:02.894226',NULL,NULL),(28,'isShI8D85xlOAmbFbwHc1uGxm7szPT','2021-11-01 12:51:17.220210','read write',1,3,'2021-11-01 02:51:17.220210','2021-11-01 02:51:17.220210',NULL,NULL),(29,'IRDShclvoEUyj9Tcpk7mOQPAVKX0ed','2021-11-01 12:58:46.127403','read write',1,4,'2021-11-01 02:58:46.127903','2021-11-01 02:58:46.127903',NULL,NULL),(30,'LtWlg8H5Kr03vW3SO2sOkESsvdfMJk','2021-11-01 12:59:01.515754','read write',1,3,'2021-11-01 02:59:01.516255','2021-11-01 02:59:01.516255',NULL,NULL),(31,'JuHU27iC3ys2sjRwoVeevvUOZtCGyu','2021-11-01 17:09:13.267986','read write',1,3,'2021-11-01 07:09:13.268989','2021-11-01 07:09:13.268989',NULL,NULL),(32,'6dkkGatsnjayVXvXN8KBFp7ozuJleZ','2021-11-03 08:28:41.534625','read write',1,3,'2021-11-02 22:28:41.535124','2021-11-02 22:28:41.535124',NULL,NULL),(33,'TmhVRwlsij9aK3CtK5ZTMjnms0AX4B','2021-11-03 23:27:52.043919','read write',1,4,'2021-11-03 13:27:52.044918','2021-11-03 13:27:52.044918',NULL,NULL),(34,'lFX7zSZ0nx9maLYOAGGhYXuJyM4dAt','2021-11-03 23:29:09.278281','read write',1,3,'2021-11-03 13:29:09.278784','2021-11-03 13:29:09.278784',NULL,NULL),(35,'z9GgducK1t8RP1DLY06UHU32ogDWcv','2021-11-04 22:23:04.169515','read write',1,3,'2021-11-04 12:23:04.170016','2021-11-04 12:23:04.170016',NULL,NULL),(36,'H9gcQmfEijZGki7tcmlyn1bdzkYAXN','2021-11-05 21:12:32.214275','read write',1,4,'2021-11-05 11:12:32.214776','2021-11-05 11:12:32.214776',NULL,NULL),(37,'XskIbGgXPFQu81jW6E1FFXdodEJ6rW','2021-11-05 21:13:50.457209','read write',1,3,'2021-11-05 11:13:50.457710','2021-11-05 11:13:50.457710',NULL,NULL),(38,'BPFm5x7jrm5oy7RHm61xqzpua8pgkV','2021-11-06 00:55:16.857345','read write',1,5,'2021-11-05 14:55:16.857845','2021-11-05 14:55:16.857845',NULL,NULL),(39,'XIYPBVopqqFuGdMEebQxeqmi5MBjyh','2021-11-06 09:35:37.443508','read write',1,4,'2021-11-05 23:35:37.444008','2021-11-05 23:35:37.444008',NULL,NULL),(40,'sovxeklr7fgVx8C8eNaHCQqpYYosCc','2021-11-06 09:36:43.565083','read write',1,3,'2021-11-05 23:36:43.565083','2021-11-05 23:36:43.565083',NULL,NULL),(41,'SG6YW7f5RCkmpHBq8JAx5OYCdQxkLa','2021-11-06 13:04:29.748600','read write',1,4,'2021-11-06 03:04:29.749101','2021-11-06 03:04:29.749101',NULL,NULL),(42,'9JSdHO2bhWhx7AHmkg6MM475H8BFjf','2021-11-06 13:05:18.992090','read write',1,4,'2021-11-06 03:05:18.992090','2021-11-06 03:05:18.992590',NULL,NULL),(43,'nhkShAIUrHddxMbYSZWHjVg7GVTjlt','2021-11-06 13:07:36.114851','read write',1,4,'2021-11-06 03:07:36.115354','2021-11-06 03:07:36.115354',NULL,NULL),(44,'IpSkfynQ5hPSNQvdYTa2Gmxb7iGfyz','2021-11-06 13:09:46.585338','read write',1,4,'2021-11-06 03:09:46.586342','2021-11-06 03:09:46.586342',NULL,NULL),(45,'rhlnHFTG57TmSw7NDBHbxgVeBOAxWH','2021-11-06 13:10:07.350151','read write',1,4,'2021-11-06 03:10:07.350651','2021-11-06 03:10:07.350651',NULL,NULL),(46,'Xi00JPrtqX1EOWMJTmGX7rlz6gXrZz','2021-11-06 13:12:30.906619','read write',1,4,'2021-11-06 03:12:30.907119','2021-11-06 03:12:30.907119',NULL,NULL),(47,'mbW5N1Rrb9fDNAnGNy0IwC9KNMm5bw','2021-11-06 13:12:46.939717','read write',1,4,'2021-11-06 03:12:46.940217','2021-11-06 03:12:46.940217',NULL,NULL),(48,'G993VFO6EZfRs9qpMvtQo22PVP2Ghw','2021-11-06 13:16:36.625519','read write',1,3,'2021-11-06 03:16:36.625519','2021-11-06 03:16:36.625519',NULL,NULL),(49,'PkYvRWlzrLUrzPfsOijD4WHrs3R8eu','2021-11-06 13:21:25.687413','read write',1,3,'2021-11-06 03:21:25.688413','2021-11-06 03:21:25.688413',NULL,NULL),(50,'4ZNhtFkjZ8LNHhAJShV7Qj5s9oXyM0','2021-11-06 13:21:51.631690','read write',1,3,'2021-11-06 03:21:51.632191','2021-11-06 03:21:51.632191',NULL,NULL),(51,'1uxzD3mmFI4xnxIV3QxqSKtuGXcc6r','2021-11-12 18:13:32.711666','read write',1,5,'2021-11-12 08:13:32.712167','2021-11-12 08:13:32.712167',NULL,NULL),(52,'scKv09SbB387TYfCmLoB8IuD30MBfy','2021-11-13 01:07:39.034857','read write',1,4,'2021-11-12 15:07:39.035359','2021-11-12 15:07:39.035359',NULL,NULL),(53,'VxthvoRh1v22BIg1DxmUom4Fk5Hq76','2021-11-13 01:10:50.169438','read write',1,4,'2021-11-12 15:10:50.169941','2021-11-12 15:10:50.169941',NULL,NULL),(54,'KA3vl8MZcvB7gPbyX9NkC1NQ13c5AC','2021-11-13 01:14:19.738673','read write',1,3,'2021-11-12 15:14:19.739172','2021-11-12 15:14:19.739172',NULL,NULL),(55,'dylES9teyGNJEFaFnYDLduOKa4UTEK','2021-11-13 02:34:42.121617','read write',1,3,'2021-11-12 16:34:42.123118','2021-11-12 16:34:42.123118',NULL,NULL),(56,'3WXpJwRxuKJvQuFKnHDf1WJgr1slIi','2021-11-13 02:48:51.588343','read write',1,3,'2021-11-12 16:48:51.588844','2021-11-12 16:48:51.588844',NULL,NULL),(57,'hLtMwuzhb6w8lheNviKcF3VtRDV2Gf','2021-11-14 02:13:01.612033','read write',1,4,'2021-11-13 16:13:01.613034','2021-11-13 16:13:01.613034',NULL,NULL),(58,'GWpTels97m4XbXjZPd2O9OSpYZuGDJ','2021-11-14 02:14:40.157164','read write',1,4,'2021-11-13 16:14:40.157659','2021-11-13 16:14:40.157659',NULL,NULL),(59,'aiCb2IFYQ3dn8YRGjSsgRSjvam9j8G','2021-11-14 02:16:13.830103','read write',1,3,'2021-11-13 16:16:13.830603','2021-11-13 16:16:13.830603',NULL,NULL),(60,'hAUODvTF6gHrNx2m9WGG12W4oEd2V7','2021-11-14 18:19:36.685960','read write',1,7,'2021-11-14 08:19:36.685960','2021-11-14 08:19:36.685960',NULL,NULL),(61,'XVt7ZfKczp2QcrTVmJbtA5jXrdxEIF','2021-11-14 18:44:38.492012','read write',1,4,'2021-11-14 08:44:38.492512','2021-11-14 08:44:38.492512',NULL,NULL),(62,'akroYMd6ovZuwxBn2x7HddBgaTdIQT','2021-11-15 00:32:08.373166','read write',1,1,'2021-11-14 14:32:08.373665','2021-11-14 14:32:08.373665',NULL,NULL),(63,'aXgut1Q4OLyegHDEektX6NNJZC8e9z','2021-11-15 00:39:28.893312','read write',1,4,'2021-11-14 14:39:28.893812','2021-11-14 14:39:28.893812',NULL,NULL),(64,'aHDosn653zzpDcaqHhsuDFclqz25Gt','2021-11-15 00:39:33.781759','read write',1,1,'2021-11-14 14:39:33.781759','2021-11-14 14:39:33.781759',NULL,NULL);
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_application`
--

DROP TABLE IF EXISTS `oauth2_provider_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_application` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `client_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect_uris` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorization_grant_type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_secret` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `skip_authorization` tinyint(1) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `algorithm` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_id` (`client_id`),
  KEY `oauth2_provider_application_user_id_79829054_fk_giaohang_user_id` (`user_id`),
  KEY `oauth2_provider_application_client_secret_53133678` (`client_secret`),
  CONSTRAINT `oauth2_provider_application_user_id_79829054_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_application`
--

LOCK TABLES `oauth2_provider_application` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_application` DISABLE KEYS */;
INSERT INTO `oauth2_provider_application` VALUES (1,'lFczFakCtpTFH85crTDuvkNqzzls7DpPN1F9584i','','confidential','password','opOTRWSfbSsna94tXGomaxJSJlGCiUx3W2t4vVtk9FhpxNv36TKZt8OTPTnRrWGPY6OlOqKOR5DE6W6wjcXJHC7WDfHfCKyThf9peuQqf9rAnvVYwQkbQ4LXxA8PTGIe','GiaoHangApp',1,0,'2021-10-16 15:13:48.252219','2021-10-16 15:13:48.252219','');
/*!40000 ALTER TABLE `oauth2_provider_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_grant`
--

DROP TABLE IF EXISTS `oauth2_provider_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_grant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `redirect_uri` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `code_challenge` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_challenge_method` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nonce` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `claims` longtext COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (_utf8mb3''),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_grant_user_id_e8f62af8_fk_giaohang_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_grant_user_id_e8f62af8_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_grant`
--

LOCK TABLES `oauth2_provider_grant` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_grant` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_idtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_idtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_idtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `jti` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jti` (`jti`),
  KEY `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_idtoken_user_id_dd512b59_fk_giaohang_user_id` (`user_id`),
  CONSTRAINT `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_idtoken_user_id_dd512b59_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_idtoken`
--

LOCK TABLES `oauth2_provider_idtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_refreshtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_refreshtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_refreshtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` bigint DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `revoked` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `access_token_id` (`access_token_id`),
  UNIQUE KEY `oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq` (`token`,`revoked`),
  KEY `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_refr_user_id_da837fce_fk_giaohang_` (`user_id`),
  CONSTRAINT `oauth2_provider_refr_access_token_id_775e84e8_fk_oauth2_pr` FOREIGN KEY (`access_token_id`) REFERENCES `oauth2_provider_accesstoken` (`id`),
  CONSTRAINT `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_refr_user_id_da837fce_fk_giaohang_` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_refreshtoken`
--

LOCK TABLES `oauth2_provider_refreshtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_refreshtoken` VALUES (20,'wbHJcT6D60bfH9iEv3uSsOsQqPoBGz',20,1,4,'2021-10-28 10:12:44.690860','2021-10-28 10:12:44.690860',NULL),(21,'1VJzZGugGnO3ywiD0MlsMU3HE0SMVl',21,1,4,'2021-10-28 17:12:29.145787','2021-10-28 17:12:29.145787',NULL),(22,'YvFLKGePOp4NzcMTQyQuuEj5QtAzek',22,1,4,'2021-10-29 21:24:29.091370','2021-10-29 21:24:29.091370',NULL),(23,'69rmwNOtzIsl8C5gWmT5rqMFCjPXIi',23,1,4,'2021-10-29 22:02:10.585161','2021-10-29 22:02:10.585161',NULL),(24,'96XQ9yBuOI6LCZNtXzbm4XtSkOxATj',24,1,4,'2021-10-30 12:25:22.594553','2021-10-30 12:25:22.594553',NULL),(25,'1ZV8knOrx8nKCjjjEwB8XFLyhRJ1Mu',25,1,4,'2021-11-01 02:02:35.497433','2021-11-01 02:02:35.497433',NULL),(26,'RgrII085Of3gI6ULRnYi7BadlWbfyy',26,1,4,'2021-11-01 02:12:02.629061','2021-11-01 02:12:02.629061',NULL),(27,'eL0bkzO6oGqf08l7bwNYLJTUhK2QCP',27,1,3,'2021-11-01 02:47:02.896723','2021-11-01 02:47:02.896723',NULL),(28,'3fFckUqD1wXsdGzeODQUP2KjY2qluG',28,1,3,'2021-11-01 02:51:17.222206','2021-11-01 02:51:17.222206',NULL),(29,'rq5ztegtsiXU674z3Av5oPHTmsbUzI',29,1,4,'2021-11-01 02:58:46.128902','2021-11-01 02:58:46.128902',NULL),(30,'yTpgnkrhIEGK3zEnePkKw3JrwVhrud',30,1,3,'2021-11-01 02:59:01.518257','2021-11-01 02:59:01.518257',NULL),(31,'Ru3Nvaxp8y4rXZHNnRxzsDZFJv1OqR',31,1,3,'2021-11-01 07:09:13.270986','2021-11-01 07:09:13.270986',NULL),(32,'37iV6hJt3FA717AkyIBfVvVb0JjKMd',32,1,3,'2021-11-02 22:28:41.539124','2021-11-02 22:28:41.539625',NULL),(33,'fD8BXDYTCSmZaYBivTmbUNhbYD37kn',33,1,4,'2021-11-03 13:27:52.047922','2021-11-03 13:27:52.047922',NULL),(34,'ZmfFAirvGqtEgsrXcimyT4M915HQLY',34,1,3,'2021-11-03 13:29:09.281083','2021-11-03 13:29:09.281083',NULL),(35,'DjujiYr8qfzpI3qbpGuuvNgMlfj6UV',35,1,3,'2021-11-04 12:23:04.174015','2021-11-04 12:23:04.174516',NULL),(36,'C6UJuCzW87HC3cYy94GZfpjan7pmqK',36,1,4,'2021-11-05 11:12:32.219276','2021-11-05 11:12:32.219276',NULL),(37,'1x7QbAv59T7QMvaeP7Pz2QqaL3KDNH',37,1,3,'2021-11-05 11:13:50.460210','2021-11-05 11:13:50.460210',NULL),(38,'L38KgEdU9VFQ3OdSNVDF5dDJ8ICr5T',38,1,5,'2021-11-05 14:55:16.860844','2021-11-05 14:55:16.860844',NULL),(39,'ewk0QQ8otX9DmhYkbib5Nkgj8IR6pq',39,1,4,'2021-11-05 23:35:37.446509','2021-11-05 23:35:37.446509',NULL),(40,'jKXl4HPIKpHkTb2jJutN8DbBz3sEnJ',40,1,3,'2021-11-05 23:36:43.567082','2021-11-05 23:36:43.567082',NULL),(41,'o9vkna2jEfpZvqbIeM7juzutUmsMr2',41,1,4,'2021-11-06 03:04:29.753806','2021-11-06 03:04:29.753806',NULL),(42,'Q3l2pvTok2arlrulruAPoehD251dN3',42,1,4,'2021-11-06 03:05:18.994595','2021-11-06 03:05:18.994595',NULL),(43,'kuNQ7kSL1VXc6ygIoYEZnnIOTTAm2e',43,1,4,'2021-11-06 03:07:36.116852','2021-11-06 03:07:36.116852',NULL),(44,'wWyxLjE2JowRdHJKyZ7BpM2YJYjPKO',44,1,4,'2021-11-06 03:09:46.589341','2021-11-06 03:09:46.589341',NULL),(45,'WmV0Q7TkBoHcGCfAMMgzgm0y5NG2xS',45,1,4,'2021-11-06 03:10:07.352150','2021-11-06 03:10:07.352150',NULL),(46,'z57qpJdd9xBnyviMIKHqGPverlNP2D',46,1,4,'2021-11-06 03:12:30.908622','2021-11-06 03:12:30.908622',NULL),(47,'iTr4elb2fvn7bcosPCl6HUXAWFkXEt',47,1,4,'2021-11-06 03:12:46.943218','2021-11-06 03:12:46.943218',NULL),(48,'bm5QQb6AUoIGgQXOLK8jQX9LyX4swC',48,1,3,'2021-11-06 03:16:36.627520','2021-11-06 03:16:36.627520',NULL),(49,'PJ82NnvA9BQgGp4aDnbJ2cyWSQouhM',49,1,3,'2021-11-06 03:21:25.690413','2021-11-06 03:21:25.690413',NULL),(50,'FTyQE5PzewJZJjWyPRwnRWqPwWSoKj',50,1,3,'2021-11-06 03:21:51.635691','2021-11-06 03:21:51.635691',NULL),(51,'Endf98fTTmzM0Z8O3pcNlm3yAerq22',51,1,5,'2021-11-12 08:13:32.722169','2021-11-12 08:13:32.722169',NULL),(52,'t000iWHRStisRcAe9smOJ8j8C8evUS',52,1,4,'2021-11-12 15:07:39.037357','2021-11-12 15:07:39.037357',NULL),(53,'uDupfzI5nltFeneiJullge6uQMOJ2p',53,1,4,'2021-11-12 15:10:50.171438','2021-11-12 15:10:50.171438',NULL),(54,'tPippLe5SYPCaygGhrqjYbKmOgkPdl',54,1,3,'2021-11-12 15:14:19.740172','2021-11-12 15:14:19.740172',NULL),(55,'VU6fiRwG6PIC4APdu6HCNm3dTrv40R',55,1,3,'2021-11-12 16:34:42.126117','2021-11-12 16:34:42.126117',NULL),(56,'AFQNHBBSH7i6eEMoGWaskWcVYnrMWF',56,1,3,'2021-11-12 16:48:51.590846','2021-11-12 16:48:51.590846',NULL),(57,'Piwe2iaVufqgPfknZWWesKpdNYnDti',57,1,4,'2021-11-13 16:13:01.614532','2021-11-13 16:13:01.614532',NULL),(58,'OdUxnBovC58VOFfUaXoWDqUZ9ChKOH',58,1,4,'2021-11-13 16:14:40.159160','2021-11-13 16:14:40.159160',NULL),(59,'mIsnZUCoUWRlD019v4RP3K7xJ8DP8E',59,1,3,'2021-11-13 16:16:13.832605','2021-11-13 16:16:13.832605',NULL),(60,'2LPmpDdiKRBBAo6C56st284gFeMKLZ',60,1,7,'2021-11-14 08:19:36.688960','2021-11-14 08:19:36.688960',NULL),(61,'hb3TXaYaxjAXAhV1BGTj027y1YlpUG',61,1,4,'2021-11-14 08:44:38.494513','2021-11-14 08:44:38.494513',NULL),(62,'fu4nUNv75vJ0p5Esmh4xkg5b3WL7Cz',62,1,1,'2021-11-14 14:32:08.376667','2021-11-14 14:32:08.376667',NULL),(63,'yiPAC1vSTUruvFn9ivBfp2u8EWWEjZ',63,1,4,'2021-11-14 14:39:28.895314','2021-11-14 14:39:28.895314',NULL),(64,'WOKTZjLzJ18F0k6efc2NS7blL8arf5',64,1,1,'2021-11-14 14:39:33.784258','2021-11-14 14:39:33.784258',NULL);
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_auth_association`
--

DROP TABLE IF EXISTS `social_auth_association`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_auth_association` (
  `id` int NOT NULL AUTO_INCREMENT,
  `server_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `handle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issued` int NOT NULL,
  `lifetime` int NOT NULL,
  `assoc_type` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_auth_association_server_url_handle_078befa2_uniq` (`server_url`,`handle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_auth_association`
--

LOCK TABLES `social_auth_association` WRITE;
/*!40000 ALTER TABLE `social_auth_association` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_auth_association` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_auth_code`
--

DROP TABLE IF EXISTS `social_auth_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_auth_code` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(254) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `timestamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_auth_code_email_code_801b2d02_uniq` (`email`,`code`),
  KEY `social_auth_code_code_a2393167` (`code`),
  KEY `social_auth_code_timestamp_176b341f` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_auth_code`
--

LOCK TABLES `social_auth_code` WRITE;
/*!40000 ALTER TABLE `social_auth_code` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_auth_code` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_auth_nonce`
--

DROP TABLE IF EXISTS `social_auth_nonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_auth_nonce` (
  `id` int NOT NULL AUTO_INCREMENT,
  `server_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int NOT NULL,
  `salt` varchar(65) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_auth_nonce_server_url_timestamp_salt_f6284463_uniq` (`server_url`,`timestamp`,`salt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_auth_nonce`
--

LOCK TABLES `social_auth_nonce` WRITE;
/*!40000 ALTER TABLE `social_auth_nonce` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_auth_nonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_auth_partial`
--

DROP TABLE IF EXISTS `social_auth_partial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_auth_partial` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `next_step` smallint unsigned NOT NULL,
  `backend` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `social_auth_partial_token_3017fea3` (`token`),
  KEY `social_auth_partial_timestamp_50f2119f` (`timestamp`),
  CONSTRAINT `social_auth_partial_chk_1` CHECK ((`next_step` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_auth_partial`
--

LOCK TABLES `social_auth_partial` WRITE;
/*!40000 ALTER TABLE `social_auth_partial` DISABLE KEYS */;
/*!40000 ALTER TABLE `social_auth_partial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_auth_usersocialauth`
--

DROP TABLE IF EXISTS `social_auth_usersocialauth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_auth_usersocialauth` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extra_data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `modified` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `social_auth_usersocialauth_provider_uid_e6b5e668_uniq` (`provider`,`uid`),
  KEY `social_auth_usersocialauth_user_id_17d28448_fk_giaohang_user_id` (`user_id`),
  KEY `social_auth_usersocialauth_uid_796e51dc` (`uid`),
  CONSTRAINT `social_auth_usersocialauth_user_id_17d28448_fk_giaohang_user_id` FOREIGN KEY (`user_id`) REFERENCES `giaohang_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_auth_usersocialauth`
--

LOCK TABLES `social_auth_usersocialauth` WRITE;
/*!40000 ALTER TABLE `social_auth_usersocialauth` DISABLE KEYS */;
INSERT INTO `social_auth_usersocialauth` VALUES (1,'google-oauth2','mr.tuan1749@gmail.com','{\"auth_time\": 1636877976, \"expires\": null, \"access_token\": \"ya29.a0ARrdaM_PI9iM43f9YxvMig4fwuMX0UGn0Cbn030IVlV_iLIoCsamxaptjNAqIg96qAMo0l_YZGXRl3cmTs7CBt-VLk34oI5dt8ab0rknyfXKKug6HQNHiZmzNqO_-SzqI440jNolVdVCujK-tb7IWf-8HK-i\", \"token_type\": null}',7,'2021-11-14 08:19:36.679335','2021-11-14 08:19:36.682169');
/*!40000 ALTER TABLE `social_auth_usersocialauth` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-17 23:59:57

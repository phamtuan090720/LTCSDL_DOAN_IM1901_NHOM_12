import { Result } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Loading from '../../components/Loading/Loading';
import DetailInfoShipper from './components/DetailInfoShipper/DetailInfoShipper';
import Header from './components/Header/Header';
import ReviewShipper from './components/ReviewShipper/ReviewShipper';
import { getInfoShipper } from './reducer/actions';
export default function InfoShipper() {
  const { loading, err } = useSelector(state => state.detailInfoShipperReducer)
  const param = useParams()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoShipper(param.id))
  }, [dispatch, param])
  if (loading) return <Loading />
  if (err) return <Result
    status="404"
    title="404"
    subTitle={err.data.detail}
  />
  return (
    <>
      <div style={{ marginTop: 40 }}>
        <Header />
        <DetailInfoShipper />
        <ReviewShipper />
      </div>

    </>
  );
}







import { useEffect, useRef } from "react";

const MapNaverDefault = () => {

  const mapElement = useRef(null);
  const { naver } = window;

  useEffect(() => {
    if (!mapElement.current || !naver) return;
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.

    var mapOptions = {
      center: new naver.maps.LatLng(37.5070856701229, 127.062897340803),
      zoom: 18,
      zoomControl: true,
	  mapTypeControl: true
    };

    var map = new naver.maps.Map(mapElement.current, mapOptions);
  }, []);

  return (
    <>
      <div ref={mapElement} style={{ minHeight: "100vh" }} />
    </>
  );
};

export default MapNaverDefault;

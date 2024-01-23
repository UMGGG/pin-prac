"use client"

import { useEffect, useRef, useState } from "react";
const MapNaverDefault = () => {
	const { naver } = window;
	const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);
  	let map: naver.maps.Map;
	const mapElement = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		if (!mapElement.current || !naver) return;
		const center = new naver.maps.LatLng(37.3595704, 127.105399);
		const mapOptions: naver.maps.MapOptions = {
		  center: center,
		  zoom: 18,
		  zoomControl: true,
		  zoomControlOptions: {
			style: naver.maps.ZoomControlStyle.SMALL,
			position: naver.maps.Position.TOP_RIGHT,
		  },
		};
		//설정해놓은 옵션을 바탕으로 지도 생성
		map = new naver.maps.Map(mapElement.current, mapOptions);
		setNewMap(map);
	  }, []);
	  return (
		  <div id="map" ref={mapElement} style={{ minHeight: "100vh" }}></div>
	  );
};

export default MapNaverDefault;

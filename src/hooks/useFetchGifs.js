import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = category => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then(imgs => {
			setState({
                data: imgs,
                loading: false,
            });
		});
	});

	return state;
};

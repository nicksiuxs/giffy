import { useContext } from 'react';
import GifsContext from 'src/context/GifsContext';

export default function useGlobalGifs() {
	return useContext(GifsContext).gifs;
}

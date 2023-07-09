import store from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type Dispatch = typeof store.dispatch;

const useAppDispatch = () => useDispatch<Dispatch>();

const useSlice = (sliceName: keyof RootState) => {
	return useSelector((store: RootState) => store[sliceName]);
};

export { useSlice };
export default useAppDispatch;

import {store} from "../../app/providers/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

declare type RootState = ReturnType<typeof store.getState>;
declare type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

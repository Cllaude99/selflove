import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface ICheckState {
  [key: string]: ITodo[];
}
export interface ITodo {
  cid: number;
  content: string;
}
export const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const checkListState = atom<ICheckState>({
  key: 'checkList',
  default: {
    checkList: [
      { cid: 1, content: '하루에 책 10 페이지 읽기' },
      { cid: 2, content: '좋은 노래 많이 듣기' },
      { cid: 3, content: '돈 많이 안 쓰지 않기' },
      { cid: 4, content: '욕 끊기' },
      { cid: 5, content: '러브마이셀프 하기' },
      { cid: 6, content: '일지 밀리지 않기' },
    ],
  },
});

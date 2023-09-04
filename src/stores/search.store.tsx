import {atom, selector} from "recoil"

export const searchValue = atom({
  key: "searchValue",
  default: "General Medicine",
})

export const isSearchModalShowing = atom({
  key: "isSearchModalShowing",
  default: false
})

export const getSearchResults = selector({
  key: "getSearchResults",
  get: ({get}) => {
    const text = get(searchValue)
    return text.length
  },
})



export const searchValueSelector = selector({
  key: "searchValue",
  get: ({get}) => {
    return get(searchValue)
  },
})

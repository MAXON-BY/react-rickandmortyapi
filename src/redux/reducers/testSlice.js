import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  org: 'rails',
  repo: 'rails',
  page: 1,
  displayType: 'issues',
  issueId: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    displayRepo(state, action) {
      const { org, repo } = action.payload;
      state.org = org;
      state.repo = repo;
    },
    setCurrentPage(state, action) {
      state.page = action.payload;
    },
    setCurrentDisplayType(state, action) {
      const { displayType, issueId = null } = action.payload;
      state.displayType = displayType;
      state.issueId = issueId;
    },
  },
});

export const { displayRepo, setCurrentDisplayType, setCurrentPage } = testSlice.actions;

export default testSlice.reducer;

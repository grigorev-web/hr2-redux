const reducer = (state, action) => {
  switch (action.type) {
    case "ONLOAD_TABLE":
      return { ...state, candidates: action.candidates };
      break;

    case "FETCH_MORE_CANDIDATES":
      return {
        ...state,
        candidates: state.candidates.concat(action.candidates),
      };
      break;
    case "LOADING":
      return { ...state, loading: true };
      break;
    case "LOADED":
      return { ...state, loading: false };
      break;

    case "ONLOAD_DESK":
      return { ...state, deskCandidates: action.candidates, loading: false };
      break;
    case "LOGOUT":
      return { ...state, loading: false, login: false };
      break;

    case "LOGIN":
      return { ...state, login: action.login, role: action.role };
      break;

    case "CLOSE_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.modal]: {
            ...state.modals[action.modal],
            active: false,
            id: false,
          },
        },
      };
      break;

    case "OPEN_MODAL_COMMENT":
      return {
        ...state,
        modals: {
          ...state.modals,
          commentStatus: {
            id: action.id,
            status: action.status,
            active: true,
          },
        },
      };
      break;

    case "OPEN_MODAL_SOBESTIME":
      return {
        ...state,
        modals: {
          ...state.modals,
          sobesTime: {
            id: action.id,
            status: action.status,
            active: true,
          },
        },
      };
      break;

    case "OPEN_CANDIDATE_CARD":
      return {
        ...state,
        modals: {
          ...state.modals,
          candidateCard: {
            id: action.id,
            candidate: action.candidate,
            events: action.events,
            active: true,
          },
        },
      };
      break;

    case "CHANGE_STATUS_UPDATE":
      return {
        ...state,
        candidates: state.candidates.map((item) => {
          if (item.id == action.id) {
            let tempItem = { ...item };
            tempItem.status = action.newStatus;
            return tempItem;
          }
          return item;
        }),
        deskCandidates: state.deskCandidates.map((item) => {
          if (item.id == action.id) {
            let tempItem = { ...item };
            tempItem.status = action.newStatus;
            return tempItem;
          }
          return item;
        }),
      };
      break;

    case "CHANGE_HR_UPDATE":
      return {
        ...state,
        candidates: state.candidates.map((item) => {
          if (item.id == action.id) {
            let tempItem = { ...item };
            tempItem.hr = action.hr;
            return tempItem;
          }
          return item;
        }),
        deskCandidates: state.deskCandidates.map((item) => {
          if (item.id == action.id) {
            let tempItem = { ...item };
            tempItem.hr = action.hr;
            return tempItem;
          }
          return item;
        }),
      };
      break;


    case "CHANGE_PROJECT_UPDATE":
    return {
      ...state,
      candidates: state.candidates.map((item) => {
        if (item.id == action.id) {
          let tempItem = { ...item };
          tempItem.project = action.project;
          return tempItem;
        }
        return item;
      }),
      deskCandidates: state.deskCandidates.map((item) => {
        if (item.id == action.id) {
          let tempItem = { ...item };
          tempItem.project = action.project;
          return tempItem;
        }
        return item;
      }),
      modals:{
        ...state.modals,
        candidateCard:{
          ...state.modals.candidateCard,
          candidate:{
            ...state.modals.candidateCard.candidate,
            project: action.project,
          }
        }
      }
    };
    break;

    case "ADD_TOAST":
      return {
        ...state,
        toasts: [
          ...state.toasts,
          {
            id: action.id,
            message: action.message,
            color: action.color,
            display: 0.8,
          },
        ],
      };
      break;

    case "HIDE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((toast) => {
          if (toast.id == action.id) {
            let tempToast = { ...toast };
            tempToast.display = 0;
            return tempToast;
          }
          return toast;
        }),
      };
      break;

    case "DELETE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id != action.id),
      };
      break;

    case "SET_USERS":
      return { ...state, users: action.users };
      break;

    case "CLEAR_USERS":
      return { ...state, users: [] };
      break;
    case "ADD_TABLE_FILTER":
      // ???????? ???????????? ?????? ???????????????? ???????? column('city' ?????? 'status')
      if (state.filterTable.some((obj) => action.column in obj)) {
        return {
          ...state,
          filterTable: state.filterTable.map((obj) => {
            // ???????? ???????????? ????????????
            if (action.column in obj)
              return { [action.column]: [...obj[action.column], action.value] };
            // ?????????? ?????????? value
            else return obj;
          }),
          scroll: true,
        };
      } // ???????? ???? ???????????????? - ?????????????????? ???????????? ??????????????
      else
        return {
          ...state,
          filterTable: [
            ...state.filterTable,
            { [action.column]: [action.value] },
          ],
          scroll: true,
        };
      break;

    case "DELETE_TABLE_FILTER":
      // {type:'DELETE_TABLE_FILTER',column:'city',value:'???????????? ????????????????'}

      let column = action.column; // 'city','phonename','status'
      let newFilter; // ?????????? ???????????? ???????????????? ????????????????

      state.filterTable.some((obj) => {
        // ???????? ???????? ?????????? ????????????
        if (column in obj) {
          if (obj[column].length < 2)
            newFilter = state.filterTable.filter((obj) => !(column in obj));
          // ???????? ???????? ????????????????, ???? ?????????????? ????????????
          // ???????? ???????????????????? ???????????? ????????????, ???? ?????????????? ????????????????
          else
            newFilter = state.filterTable.map((obj) => {
              if (column in obj)
                return {
                  [column]: obj[column].filter(
                    (param) => param !== action.value
                  ),
                };
              else return obj;
            });
          return true; // ?????????? ???? ??????????
        }
      });

      return {
        ...state,
        filterTable: newFilter,
        scroll: true,
      };
      break;

    case "CLEAR_NAMEPHONE_FILTER":
      return {
        ...state,
        filterTable: state.filterTable.filter((obj) =>
          "namephone" in obj ? false : true
        ),
        scroll: true,
      };
      break;

    case "CLEAR_TABLE_FILTER":
      return { ...state, filterTable: [], scroll: true };
      break;

    case "ADD_NAMEPHONE_FILTER":
      let newFilterTable;

      if (action.value.length < 4)
        // ???????????? 3 ????????, ?????????????? ????????????
        newFilterTable = [...state.filterTable].filter(
          (obj) => !("namephone" in obj)
        );
      else
        newFilterTable = [...state.filterTable].some(
          (obj) => "namephone" in obj
        ) // ???????? ?????? ???????? ?????????? 'namephone' - ????????????
          ? [...state.filterTable].map((obj) => {
              if ("namephone" in obj) return { namephone: [action.value] };
              else return obj;
            })
          : [...state.filterTable, { namephone: [action.value] }]; // ???????? ?????? ?????????????? - ??????????????????

      return { ...state, filterTable: newFilterTable, scroll: true };
      break;

    case "STOP_SCROLL":
      return { ...state, scroll: false };
      break;

    case "INIT_SETTINGS":
      return {
        ...state,
        projects: action.projects.reduce((acc, value)=>{
          acc[value.id] = value.name;
          return acc;
        },{}),
      };
      break;


    case "UPDATE_PROJECTS":
      return {
        ...state,
        projects: action.projects.reduce((acc, value)=>{
          acc[value.id] = value.name;
          return acc;
        },{}),
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;

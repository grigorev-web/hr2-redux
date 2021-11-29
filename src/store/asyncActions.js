
import api from "./API";



export const asyncGetCandidatesInit = () => (dispatch, getState) =>{

  
  const state = getState();
  if(state.loading) return;
  dispatch({type:"LOADING"});

  
  const API = api(dispatch,state);

  API.post(`candidates`,{filter:state.filterTable})
    .then(function (response) {
        console.log(response.data);
        dispatch({type:"ONLOAD_TABLE", candidates: response.data.candidates})
        
        setTimeout( () => dispatch({type:"LOADED"}), 100);
    })
    .catch(function (error) {
      console.log(error);
    });
}


export const asyncGetMoreCandidates = () => (dispatch, getState) =>{

  const state = getState();

  const API = api(dispatch,state);
  //if(state.candidates[state.candidates.length -1].id < 1000) return; // перестать подгружать
  if(!state.scroll) return;
  let last_id = state.candidates[state.candidates.length -1].id;

  API.post(`candidates?offset=${last_id}`,{filter:state.filterTable})
    .then(function (response) {
         console.log(response);
        dispatch({type:"FETCH_MORE_CANDIDATES", candidates: response.data.candidates})

    })
    .catch(function (error) {
      console.log(error);
    });
}


export const asyncChangeStatus = (id, status,comment = '', time = '', closeFunc = 0) => (dispatch, getState) =>{
  //dispatch({type:"LOADING"});
  console.log("asyncChangeStatus")
  //if(state.candidates[state.candidates.length -1].id < 11) return; // перестать подгружать
  const API = api(dispatch,getState());
  //let last_id = state.candidates[state.candidates.length -1].id;

  API.put(`candidates/${id}/change-status`, {status:status, comment:comment, time:time})
    .then(function (response) {
         console.log(response);
         if(closeFunc) closeFunc(false);
         //dispatch({type:"LOADED"});
         dispatch({type:"CHANGE_STATUS_UPDATE",id:id,newStatus:status});
         dispatch(showToast("Статус изменен","success"));
       })
       .catch(function (error) {
      console.log(error);
    });
}




export const asyncGetDeskCandidates = (filter = false) => (dispatch, getState) =>{
  dispatch({type:"LOADING"});
  console.log("asyncGetDeskCandidates")
  const state = getState();
  const API = api(dispatch,state);

  API.post(`candidates/get-desk-candidates`,{filter:filter})
    .then(function (response) {
         console.log("asyncGetDeskCandidates SUCCESS",response.data);
        dispatch({type:"ONLOAD_DESK", candidates: response.data.results})

    })
    .catch(function (error) {
      console.log(error);
    });
}

export const showToast  = (message, color) => (dispatch, getState) =>{
  let id = Date.now();
  dispatch({type:"ADD_TOAST", id: id, message:message, color:color});
  setTimeout( ()=> dispatch({type:"HIDE_TOAST",id:id}),3000);
  setTimeout( ()=> dispatch({type:"DELETE_TOAST",id:id}),4000);
}

export const asyncGetCardCandidate  = (id, setLoading) => (dispatch, getState) =>{
  dispatch({type:"LOADING"});
  const state = getState();
  const API = api(dispatch,state);

  API.get(`candidates/${id}/get-card`)
    .then(function (response) {
        console.log(response);
        dispatch({type:"LOADED"});
        setLoading(false);
        dispatch({type:"OPEN_CANDIDATE_CARD", id:id, candidate:response.data.candidate, events:response.data.events})
    })
    .catch(function (error) {
      console.log(error);
    });
}


export const handleFile = (e,id,refresh) => (dispatch, getState) =>{

  const state = getState();
  const API = api(dispatch,state);

  if( e.target.files[0]?.type !== "application/pdf"){
    alert("Ошибка: Загрузите PDF");
    return;
  }

  const data = new FormData();
  data.append('file1', e.target.files[0]);
  //console.log("DATA FILE",data);
  //let url = `http://10.105.0.8/dg/hh/api/index.php?action=set_resume_file&login=${state.login}&env=${state.env}&id=${id}`;
  API.post(`candidates/${id}/resume-upload`, data)
  // axios.post(url, data, { // receive two parameter endpoint url ,form data
  // })
       .then(response => { // then print response status
           dispatch( showToast("Файл загружен","success"));
           console.log(response);
           refresh(+ new Date());
       })
}

export const asyncGetUsers = () => (dispatch, getState) =>{
  dispatch({type:"CLEAR_USERS"})

  const state = getState();
  const API = api(dispatch,state);
  API.get(`users`)
    .then( response =>{
      console.log("USERS",response.data.users)
      dispatch({type:"SET_USERS",users: response.data.users})
    });
}


export const asyncChangeHR = (hr,candidateID) => (dispatch, getState) =>{

  console.log("asyncChangeHR",hr,candidateID)
  const state = getState();
  const API = api(dispatch,state);
  API.put(`candidates/${candidateID}/change-hr`, {hr:hr})
    .then(function (response) {
         console.log(response);
         //if(closeFunc) closeFunc(false);
         //dispatch({type:"LOADED"});
         //dispatch({type:"CHANGE_STATUS_UPDATE",id:id,newStatus:status});
         dispatch(showToast("HR изменен","success"));
         dispatch({type:"CHANGE_HR_UPDATE",id:candidateID,hr:hr});
       })
       .catch(function (error) {
      console.log(error);
    });
}


export const asyncGetCandidatesFilter = () => (dispatch, getState) =>{

  const state = getState();
  const API = api(dispatch,state);
  API.post(`candidates/filter`,{filter:state.filterTable})
    .then( function(response){
      console.log("SERVER RESPONSE FILTER", response.data)
      dispatch({type:"ONLOAD_TABLE", candidates: response.data.result})
    })
}
const initialState = {
    candidates:[],
    deskCandidates:[],
    loading:false,
    login: false,
    role: false,
    env:process.env.NODE_ENV,  // "development","production"
    toasts:[],
    users:[],
    modals:{
      sobesTime:{
        active:false,
        status:false,
        id:false,
        time:false,
      },
      commentStatus:{
        active:false,
        status:false,
        id: false,
      },
      candidateCard:{
        active:false,
        id:false,
        candidate:{},
        events:[],
      }
    },
    filterTable:[
                  {city:[]},
                  {status:[]}
                ],
    sort:false,
}


export default initialState;

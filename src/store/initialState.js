const initialState = {
    candidates:[],
    deskCandidates:[],
    loading:false,
    login: false,
    role: false,
    scroll:true,
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
                 // {city:['Нижний Новгород','Выкса']},
                  {status:[2,3]}
                ],
    sort:{},
}


export default initialState;

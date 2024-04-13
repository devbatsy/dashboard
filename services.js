import { 
	DomType,
	sydDOM,
	setStyle,
	styleComponent,
	mount,
	useState,
	getState,
	preState,
	createElement 
} from "./sydneyDom.js";

setStyle([
    {
        nameTag:'dashboard',
        style:{
            height:'100%',
            width:'100%',
            // background:'green',
            display:'flex',
            justifyContent:'center',
            flexWrap:'wrap',
            columnGap:'15px',
            rowGap:'15px',
            padding:'15px',
            overflowY:'scroll'
        }
    },
    {
        nameTag:"card",
        style:{
            boxShadow:'-2px 8px 20px rgba(0,0,0,.2)',
            display:'flex',
            flexDirection:'column',
            color:'#2F55DC',
            fontWeight:'100',
            borderRadius:'5px',
            overflow:'hidden',
            rowGap:'10px',
            height:'fit-content',
            paddingBottom:'10px'
        }
    }
])

sydDOM.dashboardService = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.dashboard()
        },
        [
            sydDOM.card(),
            sydDOM.card(),
            sydDOM.card(),
            sydDOM.card(),
            sydDOM.card(),
            sydDOM.card(),
        ]
    )
}

sydDOM.card = ({image = '', serviceType = 'WAEC Result Checker', price = '00'} = {}) =>{
    return createElement(
        'div',
        {
            style:styleComponent.card(),
            class:'cards'
        },
        [
            createElement(
                'div',
                {
                    style:'min-height:50%;width:100%;'+styleComponent.bg({method:'add',style:{backgroundImage:`url("./img/${image}")`,backgroundColor:'#2F55DC'}}),
                    class:'cardImg'
                }
            ),
            createElement('div',{
                style:'display:flex;row-gap:15px;justify-content:center;flex-direction:column;height:100%;padding:0 15px',
            },
            [
                createElement('p',{class:'serviceFont'},[serviceType]),
                createElement('p',{class:'priceFont'},[`₦${price}.00`]),
                sydDOM.proceedBtn(serviceType,price)
            ])
        ]
    )
}
sydDOM.proceedBtn = () =>{
    return createElement(
        'div',
        {
            style:'height:40px;width:100%;background:#2F55DC;font-weight:400;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:5px;text-transform:capitalize',
            class:'select'
        },
        [
            'proceed'
        ]
    )
}
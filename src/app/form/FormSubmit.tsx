

export type FormDataType = {
    gridName: string,
    power:string,
    downtime:string
}
export type FormActionType = {
    gridData:[],
    success:boolean,
    message:string
}
const action = async (prevState:FormActionType,formData:FormData)=>{
    const gridName  = formData.get('gridName');
    const power  = formData.get('power');
    const downtime  = formData.get('downtime');
    console.log(formData)

 const prevData:FormDataType[] = prevState?.gridData || [];
    const gridData= [...prevData,{
        gridName,
        power,
        downtime,
    }]

    try {
       return ({
            girdData: await fetch('/api/griddata',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(gridData)
            }).then(data=> data.json()),
            success:true,
            message:'data updated'
        })
    }
    catch (e){
        return ({
            girdData: prevData,
            success:true,
            message:'data updated'
        })
    }
}

export default action;
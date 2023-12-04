function Q11() {
    const qwe = { asd: 123, sdf: 654 }
    const cxz = { sdf: 345, ...qwe,
        asd: 456, zxc: 567 }
    const { sdf, asd } = cxz
    console.log(asd)
    console.log(sdf)
    
    return (
        <h1 title="rew" class="tre">I'm white on blue</h1>
    )
}


export default Q11;
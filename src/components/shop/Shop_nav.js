function Shop_nav(props){
    const {category , getCat} = props;
    return (
        <>
            <button key={category} onClick={(category)=>getCat(category)}>{category}</button>
        </>
    )
}
export default Shop_nav;
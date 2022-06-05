import Item from './Item'

const arr = [1,2,3]

const List = () => {
    return <div className="list">
        {/* {
            arr.map(Item => <div>(Item)</div>)
        } */}
        <Item />
        <Item />

        <Item />

    </div>
}

export default List
const propsReducer = (state, props) => {
    if (props.data.length > 0 && Object.keys(props.data[0]).includes('member')) {
        // console.log(props.data);
    }
    // console.log({ state, props });
}

export default propsReducer

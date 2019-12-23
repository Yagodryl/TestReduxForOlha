import React, { Component } from 'react';
import { connect } from "react-redux"
import * as ListCook from "./reducer";
import PropTypes from "prop-types";

class ListCookPage extends Component {

    componentDidMount() {
        this.props.getCookList();
    }







    render() {
        const { cookList, isLoading, error } = this.props;
        const content = cookList.map((item) => {
            return <p>{ item }</p>
        })
        return (
            isLoading?<div>Loading...</div>:
            (<div>
                {content}
            </div>)
        )
    }
}

const mapStateToProps = ({ cookBookList }) => {
    return {
        cookList: cookBookList.data,
        isLoading: cookBookList.loading,
        error: cookBookList.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCookList: () => {
            dispatch(ListCook.getCookList());
        }
    }
}

ListCookPage.PropTypes = {
    cookList: PropTypes.array.isRequire,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCookPage);
import React from "react";
import { connect } from "react-redux";
import firebase from "../../config/firebase";
import { GetUsersList } from "../../store/actions"

class Chat extends React.Component {
    constructor() {
        super()
        this.state = {
            chat_user: {},
            chats: [],
            message: ''
        }
    }
    chat = (user) => {
        // console.log('chal raha ha ')
        this.setState({
            chat_user: user
        })
        let current_user = this.props.current_user;
        let merge_uid = this.uid_merge(current_user.uid,user.uid)
        // console.log('current_user==>',current_user)
        // console.log('merge_uid==>',merge_uid)
        this.get_messages(merge_uid)
    }
    get_messages = (uid) => {
        // console.log("get_messages==>")
        // on apko pata ha real time data dyta ha 
        firebase.database().ref('/').child(`chating/${uid}`).on('child_added',(messages)=>{
            console.log('messages==>',messages.val()) 
            this.state.chats.push(messages.val())
                // message:this.state.message
            // })
            this.setState({
                chats:this.state.chats,
                // message:''
            })
        })
    }
    componentDidMount() {
        this.props.GetUsersList()
        // console.log('Components')
    }

 
    send_message = () => {
        // console.log('message==>',this.state.message)
        let user = this.props.current_user;
        let chat_user = this.state.chat_user;
        // console.log('user.uid=>',user.uid)
        // console.log(this.uid_merge(user.uid,chat_user.uid))
        // console.log('chat_user.uid=>',chat_user.uid)
        let merge_uid = this.uid_merge(user.uid,chat_user.uid)
        firebase.database().ref('/').child(`chating/${merge_uid}`).push({
            message: this.state.message,
            name: user.name,
            uid:user.uid
        })
        this.setState({
            message:''
        })

        // this.state.chats.push({
        //     message:this.state.message
        // })
        // this.setState({
        //     chats:this.state.chats,
        //     message:''
        // })

    }
    uid_merge(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }
    render() {
        // console.log('Chat user props=>',this.props)
        // console.log('Chat props=>', this.props)
        console.log('Chat props users=>', this.props)

        let user = this.props.current_user
        return (
            <div>
                <h3>Welcome! {user.name} </h3>
                <img src={user.profile} alt='' />
                <h5>EMAIL: {user.email} </h5>
                <div style={{ display: 'flex' }}>
                    <div style={{ backgroundColor: 'gray' }}>
                        <h4>CHAT USER:</h4>
                        <ul>
                            {this.props.users.map((v, i) => {
                                // console.log('v==>', v.name)
                                return (
                                    v.uid !== user.uid && <li key={i}>
                                        <img src={v.profile} alt='' />
                                        {v.name} <button onClick={() => this.chat(v)}>CHAT NOW</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div style={{ backgroundColor: 'yellow', width: '333px' }}>
                        <h4>Chat</h4>
                        {Object.keys(this.state.chat_user).length ?
                            <div>
                                <h4> <img src={this.state.chat_user.profile} alt='' /> {this.state.chat_user.name} </h4>
                                <ul>
                                    {this.state.chats.map((v, i) => {
                                        return (
                                            <li style={{color: v.uid === user.uid ? 'red' : 'green' }} key={i}>
                                                {v.message}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <input value={this.state.message} type='text' onChange={(e) => this.setState({ message: e.target.value })} placeholder="Text" />
                                <button onClick={() => this.send_message()}>Send</button>
                            </div>
                            :
                            <h4>No Chats</h4>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_user: state.current_user,
    users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
    GetUsersList: () => dispatch(GetUsersList())
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat)



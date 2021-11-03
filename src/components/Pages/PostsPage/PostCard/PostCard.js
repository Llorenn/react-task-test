import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { deletePost__START } from '../../../../redux/reducers/postsReducer'
import Loader from '../../../Loader'


export const PostCard = ({ inf, name, loading, auth }) => {
    const { likes, body, postId, title } = inf

    const [change, setChange] = useState(false)
    let [titlePost, setTitle] = useState(title)
    let [bodyPost, setBody] = useState(body)
    
    
    const dispatch = useDispatch()

    return(
        <Box>
            {auth ? 
                <ChangePost onClick={() => setChange(!change)}>Change Post</ChangePost> : 
                null}
            <PostContainer>
                {loading ? 
                    <Loader/> : 
                    <>
                        <Comments>Comments</Comments>
                        <PostCardBox>
                            <Information>
                                <InformationUser>
                                    <H3>{name ? name : 'Noname'}</H3>
                                </InformationUser>
                                <InformationLikes>
                                    {likes} Likes
                                </InformationLikes>
                            </Information>
                            <InformstionPost>
                                {change ? 
                                    <ChangeInp 
                                        value={titlePost} 
                                        onChange={(e) => setTitle(titlePost = e.target.value)}/> : 
                                    <H4>{title}</H4>
                                }
                                {change ? 
                                    <ChangeInp 
                                        value={bodyPost} 
                                        onChange={(e) => setBody(bodyPost = e.target.value)}/> : 
                                    <p>{body}</p>
                                }
                            </InformstionPost>
                        </PostCardBox>
                        {auth ? 
                            <DeletePost onClick={() => {
                                dispatch(deletePost__START(postId))
                            }}>Delete</DeletePost> :
                            null
                        }
                    </>
                }
            </PostContainer>
        </Box>
    )
}

const ChangeInp = styled.input`
    font: 20px system-ui;
    font-weight: 500;
    color: white;
    background-color: inherit;
    margin-bottom: 10px;
`

const H3 = styled.h3`
    margin-block-start: 0;
    margin-block-end: 0;
    display: block;
    font-size: 28px;
    font-weight: 600;
    letter-spacing: 2.5px;
`

const ChangePost = styled.div`
    background-color: cadetblue;
    align-text: center;
    text-align: center;
    padding: 4px 0px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    transition: 200ms;
    cursor: pointer;
    &:hover{
        padding: 6px 0px;

    }
`

const PostContainer = styled.div`
    display: flex;
`

const Box = styled(PostContainer)`
    flex-direction: column;
`

const Comments = styled.div`
    background-color: lightcoral;
    padding: 35px 10px 0px 10px;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    writing-mode: vertical-lr; 
    transition: 200ms;
    &:hover{
        padding: 35px 15px 0px 15px;
    }
`

const DeletePost = styled.div`
    background-color: mediumvioletred;
    padding: 50px 10px 0px 10px;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    writing-mode: vertical-lr; 
    cursor: pointer;
    transition: 200ms;
    &:hover{
        padding: 50px 15px 0px 15px;
    }
`

const PostCardBox = styled.div`
    width: 100%;
    margin-bottom: 35px;
    background-color: #3324c4;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 13px -7px #a49bff;
    color: white;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 15px 0px 15px;

`

const InformationUser = styled.div``

const InformationLikes = styled.span`
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
`

const H4 = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
`

const InformstionPost = styled.div`
    margin: 15px 25px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

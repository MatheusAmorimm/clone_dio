import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./style";
import { FiThumbsUp } from 'react-icons/fi';
import imageBackground from '../../assets/images/cardImage.jpeg'

export default function Card() {
    return (
      <CardContainer>
        <ImageBackground src={imageBackground}/>
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/111163121?v=4"/>
           <div>
            <h4>Matheus Amorim</h4>
            <p>Few minutes ago</p>
          </div> 
          </UserInfo>
          <PostInfo>
            <h4>Project for React Developer Training</h4>
            <p>Project realized during training react developer for DIO.<strong>More...</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#React #JSX #Javascript</h4>
            <p>
              <FiThumbsUp />10
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    )
  }

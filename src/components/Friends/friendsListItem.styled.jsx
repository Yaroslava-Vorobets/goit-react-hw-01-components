import styled from '@emotion/styled';

export const Status = styled.span`
    width: 20px;
    height:20px;
    border-radius:50%;
    background-color: ${props => {
        return props.isOnline ? 'green' : 'red';
    }};
    `;
   
   




export const Avatar = styled.img`
    margin: 0 20px 0 10px;
    `;
export const FriendName = styled.p`
    font-size: 30px;
    line-height: 1.16;
    `;

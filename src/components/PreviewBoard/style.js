import styled from "styled-components";

export const PreviewContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  box-sizing: border-box;
  box-shadow: 0 2px 84px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 80%;
  height: 500px;
  display: flex;
`;

export const CardContent = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const CardBackGround = styled.div`
  flex: 1;
  background: ${(props) => props.bgColor};
  display: flex;
align-items: flex-end;
justify-content: center;
`;

export const CardHeading = styled.div`
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  width: 300px;
  word-break: break-all;
  margin-bottom: 10px;
`;

export const CardSubtext = styled.div`
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  width: 300px;
  word-break: break-all;
`;

export const SongCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  flex: 6;
  margin: 5px;
`;

export const SongCardContent = styled.div`
  flex: 1 1 30%; /*grow | shrink | basis */
  justify-content: center;
  align-items: center;
  display: flex;
  font-size:24px;
`;

export const ImgContainer = styled.div`
img{
  padding:20px;
}
`;
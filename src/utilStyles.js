import styled from 'styled-components/native';
import { my_black, my_gray } from './constants';


export const Point = styled.Text`
    font-size: 55px;
    color: green;
    position: absolute;
    top: -35px;
    right: 0px;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const ContainerTime = styled.View`
    flex-direction: row;
    padding-top: 15px;
    padding-left: 10px;
`;
export const RightTime = styled.View`
    left: 70px;
`;

export const Col2 = styled.View`
    display: flex;
    width: 180px;
`;


export const Mx = styled.View`
    margin: 0px 10px;
`;

export const Column = styled.View`
    margin: 10px;
`;

export const ColumnForm = styled.View`
    width: 50%;
`;

export const My= styled.View`
    margin: 20px 0px;
`;


export const Container = styled.View`
    margin: 20px auto;
`;

export const Title = styled.Text`
    font-size: 16px;
    margin-vertical: 5px;
    font-weight: bold;
    text-align: left;
`;


export const MyInput = styled.View`
    background-color: #f9f9f9;
    border-radius: 5px;
    height: 50px;
    margin-left: 5px;
`;
export const TextCheckbox = styled.Text`
    padding-top: 3px;
    font-size: 18px;
`;

export const TitleButton = styled.Text`
    padding-vertical: 15px;
    padding-horizontal: 90px;
    color: white;
    font-size: 20px;
    text-align: center;
`;
export const LabelTab = styled.Text`
    color: ${my_black};
`;

export const TitleTab = styled.Text`
    color: black;
`;

export const ContainerButton = styled.View`
    bottom: 50px;
    background-color: #5dbc75;
    width: 100%
    border-radius: 15px;
`;
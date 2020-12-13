import React from 'react';
import { Link } from 'react-router-dom';

const exercise = props => {
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise.id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise.id)}}>Delete</a>
        </td>
    </tr>
}

export default exercise;
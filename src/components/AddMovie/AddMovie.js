import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const AddMovie = (props) => {

    //props yang data nya berasal dar main
    const { movies, setMovies } = props;

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    // arrow function manghandlw inputan title
    const handleTitle = (e) => { setTitle(e.target.value) }

    // arrow function menghandle inputan date
    const handleDate = (e) => { setDate(e.target.value) }

    const handleLink = (e) => { setLink(e.target.value) }

    const handleGenre = (e) => { setGenre(e.target.value) };

    const genreOptions = ["Action", "Comedy", "Drama", "Sci-Fi"]; // Add your list of genre

    // arrow func menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") }
        else if (date === "") { alert("date kosong") }
        else {
            const movie = {
                id: 4,
                title: title,
                date: date,
                Image: link,
                genre: genre
            };
            setMovies([...movies, movie]);
            alert("berhasil menambahkan movie")
        }

    };

    return (
        <AddMovieStyle>
            <div className={"container"}>
            <form className={"addmovie"} onSubmit={handleSubmit}>
                <input placeholder="masukan judul" className={"addmovie__input"} id="title" type="text" value={title} onChange={handleTitle} />
                <input placeholder="masukan link" className={"addmovie__input"} id="link" type="text" value={link} onChange={handleLink} />
                <select className={"addmovie__input"} id='genre' value={genre} onChange={handleGenre} placeholder="Masukkan genre">
                    <option value="" disabled>Select genre</option>
                    {genreOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <input placeholder="masukan tanggal" className={"addmovie__input"} id="date" type="date" value={date} onChange={handleDate} />
                <br />
                <Button variant="primary">simpan</Button>
            </form>
        </div>
        </AddMovieStyle>
    );
};

const AddMovieStyle = styled.div`
    /* AddMovie.module.css */
        .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 73vh;
        }

        .addmovie {
        display: flex;
        flex-direction: column;
        height: 500px;
        width: 550px;
        padding: 20px;
        border: 1px solid #ffffff;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.547);
        background-color: yellow;
        }

        .addmovie__input {
        width: 500px;
        height: 500px;
        border-radius: 20PX;
        margin-bottom: 20px;
        padding: 1px;
        font-size: 15px;
        border: 1px solid #ffffff;
        }

        .addmovie__button {
        background-color: #000000;
        color: yellow;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 16px;
        }

        .addmovie_button:hover {
        background-color: rgb(0, 0, 0);
        border-radius: 5px;
        }

        .addmovie__input#option {
        padding: 15px;
        font-size: 15px;
        }

`

export default AddMovie;
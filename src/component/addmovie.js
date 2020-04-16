import React, { useState } from 'react';

const Addmovie = (props) => {
    const [name, setName] = useState("")
    const [movierate, setMovierate] = useState("")

    const Addmovie = () => {
        props.Addmovieparent({ name, movierate })
        setName("");
        setMovierate("");
    }
    return (
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add movie
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="movie name" value={name} onChange={(event) => setName(event.target.value)}/>
                            <input type="Number" placeholder="movie rate" value={movierate} onChange={(event) => setMovierate(event.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => Addmovie()} > Save </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addmovie;
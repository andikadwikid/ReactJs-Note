import React from "react";
import data from "./utils/data";
import NavBar from "./component/nav/NavBar";
import Form from "./component/form/Form";
import Notes from "./component/content/Notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: data,
      search: "",
    };

    this.onDeleteNotes = this.onDeleteNotes.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
    this.onArchivedNotes = this.onArchivedNotes.bind(this);
    this.onSearchNotes = this.onSearchNotes.bind(this);
  }

  onDeleteNotes(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchivedNotes(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onAddNotes({ title, body }) {
    this.setState((prev) => {
      return {
        notes: [
          ...prev.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onSearchNotes(search) {
    this.setState((prev) => {
      return {
        ...prev,
        search: search,
      };
    });
  }

  render() {
    return (
      <div>
        <NavBar searchNotes={this.onSearchNotes} />
        <div className='row bg-dark'>
          <div className='col-md-6'>
            <Form addNotes={this.onAddNotes} />
          </div>
          <div className='col-md-6'>
            <div className='container-md p-5'>
              <h4 className="text-light">Catatan Aktif</h4>
              <hr class="bg-dark border-2 border-top border-light"></hr>
              <Notes
                notes={
                  this.state.search
                    ? this.state.notes.filter((note) =>
                      note.title.toLowerCase().includes(this.state.search.toLowerCase())
                    )
                    : this.state.notes
                }
                onDelete={this.onDeleteNotes}
                onArchived={this.onArchivedNotes}
              />
            </div>
            <div className='container-md p-5'>
              <h4 className="text-light">Catatan Aktif</h4>
              <hr class="bg-dark border-2 border-top border-light"></hr>
              <Notes
                notes={
                  this.state.search
                    ? this.state.notes.filter((note) =>
                      note.title.toLowerCase().includes(this.state.search.toLowerCase())
                    )
                    : this.state.notes
                }
                onDelete={this.onDeleteNotes}
                type="archive"
                onArchived={this.onArchivedNotes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

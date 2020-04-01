import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { name, email, phone } = this.state;
        return (
          <div className="carb mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                {/* form group for email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="you@example.com"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                {/* form group for phone number */}
                <div className="form-group">
                  <label htmlFor="phone">Phonee</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn btn-light n  btn-block"
                />
              </form>
            </div>
          </div>
        );
    }
}

export default AddContact;
import React from 'react'

const CommentForm = props => {
  const { handleSubmit, handleInputChange } = props
  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>
        <label>Write a comment</label>
        <textarea className="form-control" name="comment" rows="3" onChange={handleInputChange} />
        <div className="d-flex justify-content-end">
          <button className="btn btn-md btn-primary mt-2" type="submit">
            <i className="fas fa-sign-in-alt" /> Post comment
          </button>
        </div>
      </form>
    </div>
  )
}

export default CommentForm

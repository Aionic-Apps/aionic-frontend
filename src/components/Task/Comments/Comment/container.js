import React, { Component } from 'react'

import { Api } from 'services/api'

import Comment from 'components/Comments/Comment/'

const TaskCommentContainer = props => {
  const { taskId, comment, removeComment } = props

  const deleteComment = id => {
    Api.deleteData(`tasks/${taskId}/comments/${id}`)
      .then(res => {
        removeComment(id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="TaskCommentContainer">
      <Comment comment={comment} deleteComment={deleteComment} />
    </div>
  )
}

export default TaskCommentContainer

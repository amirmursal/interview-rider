document.addEventListener("DOMContentLoaded", () => {
  const submitComment = document.getElementById("submit-comment");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  const createComment = (text, parent = null) => {
    const commentItem = document.createElement("li");
    const commentText = document.createElement("p");
    commentText.textContent = text;

    const replyButton = document.createElement("button");
    replyButton.textContent = "Reply";

    const replyContainer = document.createElement("ul");

    replyButton.addEventListener("click", () => {
      const replyInput = document.createElement("textarea");
      replyInput.placeholder = "Write a reply ...";

      const replySubmit = document.createElement("button");
      replySubmit.textContent = "Reply";

      replySubmit.addEventListener("click", () => {
        const replyInputText = replyInput.value.trim();
        if (replyInputText) {
          const reply = commentItem.appendChild(
            createComment(replyInputText, replyContainer)
          );

          replyContainer.appendChild(reply);
        }
        replyInput.remove();
        replySubmit.remove();
      });

      commentItem.appendChild(replyInput);
      commentItem.appendChild(replySubmit);
    });
    commentItem.appendChild(commentText);
    commentItem.appendChild(replyButton);
    commentItem.appendChild(replyContainer);

    if (parent) {
      parent.appendChild(commentItem);
    } else {
      commentList.appendChild(commentItem);
    }

    return commentItem;
  };

  submitComment.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (!commentText) {
      return;
    }
    commentList.appendChild(createComment(commentText));
    commentInput.value = "";
  });
});

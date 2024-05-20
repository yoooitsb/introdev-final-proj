$(document).ready(function(){
    loadComments();
  });
  
  function loadComments() {
    var comments = [
      { name: "John", content: "I totally agree!" },
      { name: "Alice", content: "Programming changed my life!" },
      { name: "Bob", content: "I'm still unsure. Can you provide more insights?" }
    ];
  
    comments.forEach(function(comment) {
      addCommentToPage(comment.name, comment.content);
    });
  }
  
  function addComment() {
    var name = $("#name").val();
    var content = $("#comment").val();
  
    if (name && content) {
      addCommentToPage(name, content);
      $("#name").val("");
      $("#comment").val("");
    } else {
      alert("Please enter your name and comment.");
    }
  }
  
  function addCommentToPage(name, content) {
    var comment = $("<div class='comment'><span class='name'>" + name + ": </span><span class='content'>" + content + "</span><button class='editBtn'>Edit</button><button class='deleteBtn'>Delete</button></div>");
    $("#comments").prepend(comment);
  }
  
  $(document).on("click", "#commentBtn", function() {
    addComment();
  });
  
  $(document).on("click", ".editBtn", function() {
    var comment = $(this).closest('.comment');
    var content = comment.find('.content').text();
    var newName = prompt("Enter your new name:", comment.find('.name').text().slice(0, -2)); // Remove ': ' from the name
  
    if (newName !== null) {
      var newContent = prompt("Edit your comment:", content);
      if (newContent !== null) {
        comment.find('.name').text(newName + ": ");
        comment.find('.content').text(newContent);
      }
    }
  });
  
  $(document).on("click", ".deleteBtn", function() {
    var comment = $(this).closest('.comment');
    comment.remove();
  });
  
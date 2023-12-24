// pages/index.js
import React from 'react';

const Posts = ({ posts }) => (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <img src={post.imageUrl} alt="Post Image" loading="lazy" />
                <div>{post.date}</div>
                <div>{post.title}</div>
            </div>
        ))}
    </div>
);

export async function getServerSideProps() {
    // Fetch data from an API or any other source
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=25');
    const posts = await res.json();

    // Pass data to the page via props
    return { props: { posts } };
}

export default Posts;

// Mock data for demonstration purposes
const posts = [
    { id: 1, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/1" },
    { id: 2, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/2" },
    { id: 3, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/3" },
    { id: 4, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/4" },
    { id: 5, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/5" },
    { id: 6, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/6" },
    { id: 7, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/7" },
    { id: 8, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/8" },
    { id: 9, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/9" },
    { id: 10, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/10" },
    { id: 11, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/11" },
    { id: 12, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/12" },
    { id: 13, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/13" },
    { id: 14, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/14" },
    { id: 15, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/15" },
    { id: 16, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/16" },
    { id: 17, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/17" },
    { id: 18, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/18" },
    { id: 19, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/19" },
    { id: 20, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/20" },
    { id: 21, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/21" },
    { id: 22, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/22" },
    { id: 23, date: "2022-09-05", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", imageUrl:"https://jsonplaceholder.typicode.com/photos/23" },
    { id: 24, date: "2022-09-05", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...", imageUrl:"https://jsonplaceholder.typicode.com/photos/24" },
    
];


// Initial state
let currentPage = 1;
let postsPerPage = 10;
let currentSort = 'newest';

// Function to render posts
function renderPosts(posts) {
  const postContainer = $("#post-container");
  postContainer.empty();

  posts.forEach(post => {
    const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const postCard = `
      <div class="post-card">
        <img src="${post.imageUrl}" alt="Post Image" loading="lazy">
        <div class="post-date">${formattedDate}</div>
        <div class="post-title">${post.title}</div>
      </div>
    `;
    postContainer.append(postCard);
  });
}

// Function to render pagination
function renderPagination(totalPages, currentPage) {
  const paginationContainer = $("#pagination");
  paginationContainer.empty();

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = `<a href="#" class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</a>`;
    paginationContainer.append(pageLink);
  }
}

// Function to change page
function changePage(pageNumber) {
  currentPage = pageNumber;
  renderPosts(getCurrentPagePosts());
  renderPagination(getTotalPages(), currentPage);
}

// Function to change show-per-page
function changeShowPerPage() {
  postsPerPage = parseInt($("#showPerPage").val());
  currentPage = 1;
  renderPosts(getCurrentPagePosts());
  renderPagination(getTotalPages(), currentPage);
}

// Function to sort posts
function sortPosts() {
  currentSort = $("#sort").val();
  currentPage = 1;
  renderPosts(getCurrentPagePosts());
  renderPagination(getTotalPages(), currentPage);
}

// Function to get posts for the current page
function getCurrentPagePosts() {
  const sortedPosts = sortPostsByDate([...posts], currentSort);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return sortedPosts.slice(startIndex, endIndex);
}

// Function to get total number of pages
function getTotalPages() {
  return Math.ceil(posts.length / postsPerPage);
}

// Function to sort posts by date
function sortPostsByDate(posts, order) {
  if (order === 'newest') {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (order === 'oldest') {
    return posts.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  return posts;
}

// Initial render
renderPosts(getCurrentPagePosts());
renderPagination(getTotalPages(), currentPage);

let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const isVisible = prevScrollPos > currentScrollPos;

  myHeader.style.top = isVisible || currentScrollPos === 0 ? "0" : `-${myHeader.clientHeight}px`;

  // Adjust the opacity based on scroll position
  if (currentScrollPos === 0) {
    myHeader.style.backgroundColor = "rgba(230, 93, 33, 1)";
  } else {
    myHeader.style.backgroundColor = "rgba(230, 93, 33, 0.5)";
  }

  prevScrollPos = currentScrollPos;
};

// Efek parallax pada gambar banner saat di-scroll
$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  $('#parallax-banner-img').css({
    'transform': 'translateY(' + scroll / 2 + 'px)'
  });
});

// Function to render posts with label
function renderPostsWithLabel(posts) {
  const postContainer = $("#post-container");
  postContainer.empty();

  const startIndex = (currentPage - 1) * postsPerPage + 1;
  const endIndex = startIndex + posts.length - 1;
  const postLabel = `<div class="post-label">Showing ${startIndex}-${endIndex} of ${posts.length} posts</div>`;
  postContainer.append(postLabel);

  posts.forEach(post => {
    const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const postCard = `
      <div class="post-card">
        <img src="${post.imageUrl}" alt="Post Image" loading="lazy">
        <div class="post-date">${formattedDate}</div>
        <div class="post-title">${post.title}</div>
      </div>
    `;
    postContainer.append(postCard);
  });
}

// Initial render
renderPostsWithLabel(getCurrentPagePosts());
renderPagination(getTotalPages(), currentPage);

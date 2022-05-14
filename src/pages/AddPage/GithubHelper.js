import { Octokit, App } from "octokit";
// import { createTokenAuth } from "https://cdn.skypack.dev/@octokit/auth-token";

export const addFile = async (authToken, fileName) => {
  const octokit = new Octokit({
    auth: authToken,
  });

  const owner = "sickle5stone";
  const repo = "xml-viewer";

//   await octokit.request(`POST /repos/${owner}/${repo}/git/blobs`, {
//     owner,
//     repo,
//     content: "Content of the blob",
//     encoding: "utf-8",
//   });

await octokit.request(`PUT /repos/${owner}/${repo}/contents/templates/${fileName}`, {
    owner,
    repo,
    path: '/templates/fileName',
    message: 'my commit message',
    committer: {
      name: 'Monalisa Octocat',
      email: 'octocat@github.com'
    },
    content: 'bXkgbmV3IGZpbGUgY29udGVudHM='
  })
};

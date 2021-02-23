export interface PostData {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
}

const postsData: PostData[] = [
  {
    id: "1",
    title: "My First Post!",
    slug: 'my-first-post',
    date:new Date().toString(),
    content:
      "Labore dolor ea dolor ullamco excepteur nisi nulla. Proident irure minim in aliqua velit officia eiusmod deserunt ipsum adipisicing. Ex ut voluptate occaecat ipsum velit id. Irure aute officia qui veniam fugiat adipisicing ad esse officia exercitation sit adipisicing proident. Deserunt duis exercitation do et et dolor. Aliquip voluptate cupidatat commodo ullamco ut.",
  },
  {
    id: "2",
    title: "My Second Post!",
    slug: 'my-second-post',
    date:new Date().toString(),
    content:
      "Deserunt dolore Lorem et elit aute qui minim. Excepteur enim reprehenderit qui minim tempor sunt irure Lorem aliqua fugiat. Excepteur commodo laborum culpa sint quis aliqua sit labore laboris veniam. Duis id sunt occaecat consectetur voluptate enim incididunt laboris officia esse est. In aliquip reprehenderit est quis est pariatur commodo occaecat ipsum. Ullamco reprehenderit Lorem veniam pariatur nisi qui do ad reprehenderit ad tempor deserunt officia sunt.",
  },
  {
    id: "3",
    title: "My Third Post!",
    slug: 'my-third-post',
    date:new Date().toString(),
    content:
      "Nostrud aliqua qui consequat nisi irure officia veniam. Ullamco commodo adipisicing eu veniam adipisicing voluptate exercitation minim sint id ipsum qui. Tempor non elit reprehenderit est enim cillum. Id ea excepteur voluptate adipisicing labore non tempor dolore nulla minim. Et tempor quis amet et pariatur ullamco. Labore est elit Lorem fugiat.",
  },
];

export default postsData;

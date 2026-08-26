const books = [
  ["Pride and Prejudice","Jane Austen","Fiction",1813],
  ["Sense and Sensibility","Jane Austen","Fiction",1811],
  ["Emma","Jane Austen","Fiction",1815],
  ["Persuasion","Jane Austen","Fiction",1817],
  ["Mansfield Park","Jane Austen","Fiction",1814],
  ["Northanger Abbey","Jane Austen","Fiction",1817],

  ["Jane Eyre","Charlotte Brontë","Fiction",1847],
  ["Wuthering Heights","Emily Brontë","Fiction",1847],
  ["Middlemarch","George Eliot","Fiction",1871],
  ["Silas Marner","George Eliot","Fiction",1861],

  ["Oliver Twist","Charles Dickens","Fiction",1838],
  ["Great Expectations","Charles Dickens","Fiction",1861],
  ["A Tale of Two Cities","Charles Dickens","Fiction",1859],
  ["David Copperfield","Charles Dickens","Fiction",1850],
  ["Hard Times","Charles Dickens","Fiction",1854],
  ["The Pickwick Papers","Charles Dickens","Fiction",1837],

  ["Moby-Dick","Herman Melville","Fiction",1851],
  ["The Scarlet Letter","Nathaniel Hawthorne","Fiction",1850],
  ["The House of the Seven Gables","Nathaniel Hawthorne","Fiction",1851],
  ["Little Women","Louisa May Alcott","Fiction",1868],

  ["The Adventures of Tom Sawyer","Mark Twain","Fiction",1876],
  ["Adventures of Huckleberry Finn","Mark Twain","Fiction",1884],
  ["The Prince and the Pauper","Mark Twain","Fiction",1881],

  ["The Time Machine","H. G. Wells","Science",1895],
  ["The War of the Worlds","H. G. Wells","Science",1898],
  ["The Invisible Man","H. G. Wells","Science",1897],
  ["The Island of Doctor Moreau","H. G. Wells","Science",1896],

  ["Twenty Thousand Leagues Under the Sea","Jules Verne","Science",1870],
  ["Journey to the Center of the Earth","Jules Verne","Science",1864],
  ["Around the World in Eighty Days","Jules Verne","Fiction",1872],
  ["The Mysterious Island","Jules Verne","Science",1874],

  ["Dracula","Bram Stoker","Fiction",1897],
  ["Frankenstein","Mary Shelley","Science",1818],
  ["The Strange Case of Dr. Jekyll and Mr. Hyde","R. L. Stevenson","Fiction",1886],
  ["Treasure Island","R. L. Stevenson","Fiction",1883],
  ["Kidnapped","R. L. Stevenson","Fiction",1886],

  ["The Call of the Wild","Jack London","Fiction",1903],
  ["White Fang","Jack London","Fiction",1906],

  ["The Jungle Book","Rudyard Kipling","Fiction",1894],
  ["Kim","Rudyard Kipling","Fiction",1901],

  ["The Secret Garden","Frances Hodgson Burnett","Fiction",1911],
  ["A Little Princess","Frances Hodgson Burnett","Fiction",1905],

  ["The Wonderful Wizard of Oz","L. Frank Baum","Fiction",1900],
  ["The Wind in the Willows","Kenneth Grahame","Fiction",1908],
  ["Peter Pan","J. M. Barrie","Fiction",1911],

  ["Alice's Adventures in Wonderland","Lewis Carroll","Fiction",1865],
  ["Through the Looking-Glass","Lewis Carroll","Fiction",1871],

  ["The Picture of Dorian Gray","Oscar Wilde","Fiction",1890],
  ["The Importance of Being Earnest","Oscar Wilde","Fiction",1895],

  ["The Odyssey","Homer","Philosophy",-700],
  ["The Iliad","Homer","History",-750],
  ["The Republic","Plato","Philosophy",-380],
  ["Meditations","Marcus Aurelius","Philosophy",180],

  ["The Art of War","Sun Tzu","History",-500],
  ["The Prince","Niccolò Machiavelli","History",1532],

  ["The Wealth of Nations","Adam Smith","Business",1776],
  ["The Communist Manifesto","Karl Marx & Friedrich Engels","History",1848],

  ["On Liberty","John Stuart Mill","Philosophy",1859],
  ["Utilitarianism","John Stuart Mill","Philosophy",1863],

  ["Thus Spoke Zarathustra","Friedrich Nietzsche","Philosophy",1883],
  ["Beyond Good and Evil","Friedrich Nietzsche","Philosophy",1886],

  ["The Essays of Michel de Montaigne","Michel de Montaigne","Philosophy",1580],
  ["The Consolation of Philosophy","Boethius","Philosophy",524],
  ["Leviathan","Thomas Hobbes","Philosophy",1651],
  ["Utopia","Thomas More","Philosophy",1516],

  ["The Divine Comedy","Dante Alighieri","Poetry",1320],
  ["Paradise Lost","John Milton","Poetry",1667],
  ["The Raven and Other Poems","Edgar Allan Poe","Poetry",1845],
  ["Leaves of Grass","Walt Whitman","Poetry",1855],

  ["The Waste Land","T. S. Eliot","Poetry",1922],
  ["Rubaiyat of Omar Khayyam","Omar Khayyam","Poetry",1120],
  ["The Prophet","Kahlil Gibran","Poetry",1923],
  ["Sonnets","William Shakespeare","Poetry",1609],

  ["The Autobiography of Benjamin Franklin","Benjamin Franklin","Biography",1791],
  ["Narrative of the Life of Frederick Douglass","Frederick Douglass","Biography",1845],
  ["The Story of My Life","Helen Keller","Biography",1903],
  ["The Life of Samuel Johnson","James Boswell","Biography",1791],

  ["Walden","Henry David Thoreau","Self-help",1854],
  ["Civil Disobedience","Henry David Thoreau","Philosophy",1849],
  ["Self-Reliance and Other Essays","Ralph Waldo Emerson","Self-help",1841],
  ["The Souls of Black Folk","W. E. B. Du Bois","History",1903],

  ["The Interpretation of Dreams","Sigmund Freud","Science",1899],
  ["On the Origin of Species","Charles Darwin","Science",1859],
  ["The Descent of Man","Charles Darwin","Science",1871],
  ["The Expression of the Emotions in Man and Animals","Charles Darwin","Science",1872],
  ["The Voyage of the Beagle","Charles Darwin","Science",1839],

  ["Relativity: The Special and General Theory","Albert Einstein","Science",1916],
  ["A Brief History of Time","Stephen Hawking","Science",1988],
  ["The Elements","Euclid","Science",-300],
  ["Opticks","Isaac Newton","Science",1704],

  ["The Feynman Lectures on Physics Vol. I","Richard Feynman","Science",1964],
  ["The Feynman Lectures on Physics Vol. II","Richard Feynman","Science",1964],
  ["The Feynman Lectures on Physics Vol. III","Richard Feynman","Science",1964],

  ["The Practice of Management","Peter Drucker","Business",1954],
  ["My Life and Work","Henry Ford","Business",1922],
  ["Think and Grow Rich","Napoleon Hill","Self-help",1937],
  ["As a Man Thinketh","James Allen","Self-help",1903],

  ["The Power of Concentration","Theron Q. Dumont","Self-help",1918],
  ["The Science of Getting Rich","Wallace D. Wattles","Business",1910],
  ["Acres of Diamonds","Russell H. Conwell","Self-help",1890],

  ["The Elements of Style","William Strunk Jr.","Technology",1918],
  ["The Art of Computer Programming","Donald Knuth","Technology",1968],
  ["The Cathedral and the Bazaar","Eric S. Raymond","Technology",1997],
  ["The Mythical Man-Month","Frederick P. Brooks Jr.","Technology",1975],

  ["The Story of Mankind","Hendrik Willem van Loon","History",1921],
  ["The Federalist Papers","Alexander Hamilton, James Madison & John Jay","History",1788],
  ["Common Sense","Thomas Paine","History",1776],
  ["The Rights of Man","Thomas Paine","History",1791],

  ["The Social Contract","Jean-Jacques Rousseau","Philosophy",1762],
  ["Discourse on the Method","René Descartes","Philosophy",1637],

  ["Candide","Voltaire","Fiction",1759],
  ["The Sorrows of Young Werther","Johann Wolfgang von Goethe","Fiction",1774],
  ["Don Quixote","Miguel de Cervantes","Fiction",1605],
  ["The Count of Monte Cristo","Alexandre Dumas","Fiction",1844]
];

const colors = [
  "#8c2f39",
  "#23395d",
  "#31572c",
  "#5c415d",
  "#9a6a2f",
  "#284b63",
  "#6b4f3a",
  "#344e41",
  "#7f5539",
  "#4a4e69"
];

const descriptions = {
  Fiction:
    "A landmark work of literature exploring character, conflict, society and the human experience.",
  Science:
    "A foundational scientific work presenting ideas, observations and questions that shaped modern thought.",
  History:
    "An influential historical or political work offering insight into societies, events and ideas.",
  Biography:
    "A firsthand or historical account exploring the life, achievements and experiences of a remarkable person.",
  Philosophy:
    "A classic work of philosophical thought examining knowledge, ethics, society, reason and human existence.",
  Poetry:
    "A celebrated collection of poetry exploring imagination, emotion, identity and the human condition.",
  Business:
    "A foundational work exploring organizations, economics, leadership, enterprise and practical decision-making.",
  "Self-help":
    "A classic work focused on personal development, discipline, reflection, purpose and practical improvement.",
  Technology:
    "An influential technical or computing work exploring systems, methods, engineering and technological ideas.",
  "Non-fiction":
    "A carefully selected work of nonfiction offering enduring ideas and useful perspectives."
};

const languages = ["English"];

export const BOOKS = books.map((item, index) => {
  const [title, author, genre, year] = item;

  const pageCount = 120 + ((index * 37) % 580);
  const rating = Number((4.1 + ((index * 7) % 9) / 10).toFixed(1));
  const downloads = 1200 + ((index * 1947) % 98000);

  return {
    id: `book-${String(index + 1).padStart(3, "0")}`,
    title,
    author,
    genre,
    year,
    language: languages[0],
    pageCount,
    isbn: `PD-${String(index + 1).padStart(10, "0")}`,
    coverColor: colors[index % colors.length],
    coverArt: `${String.fromCharCode(65 + (index % 26))}`,
    description:
      descriptions[genre] ||
      "An enduring work selected for the Book Bank digital library.",
    tags: [
      genre,
      year < 1900 ? "Classic" : "Modern",
      "Public Domain / Reference",
      index % 2 === 0 ? "Recommended" : "Essential"
    ],
    rating,
    downloads,
    featured: index < 12,
    pdfSource: "generated"
  };
});

export const GENRES = [
  "All",
  ...Array.from(new Set(BOOKS.map((book) => book.genre)))
];

export const COLLECTIONS = [
  {
    id: "classics",
    title: "The Classics",
    description:
      "Timeless works that shaped literature and cultural history.",
    genre: "Fiction"
  },
  {
    id: "science",
    title: "Science Core",
    description:
      "Foundational works for curious minds exploring science.",
    genre: "Science"
  },
  {
    id: "philosophy",
    title: "Think Deeper",
    description:
      "Philosophical works for questioning assumptions and ideas.",
    genre: "Philosophy"
  },
  {
    id: "business",
    title: "Business Foundations",
    description:
      "Ideas about organizations, economics and leadership.",
    genre: "Business"
  },
  {
    id: "biography",
    title: "Lives That Matter",
    description:
      "Biographies and autobiographical works worth knowing.",
    genre: "Biography"
  },
  {
    id: "poetry",
    title: "Poetry Room",
    description:
      "Poetry from different eras and literary traditions.",
    genre: "Poetry"
  }
];

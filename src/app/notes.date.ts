interface NoteInterface {
    id: number;
    time: number;
    title: string;
    content: string;
}

interface NotesInterface extends Array<NoteInterface> { }

const Notes: NotesInterface = [
    {
        id: 1,
        time: 1504206630103,
        title: 'First Title..',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },
    {
        id: 2,
        time: 1504206110203,
        title: 'Second Title..',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
        id: 3,
        time: 1503209024620,
        title: 'Third Title..',
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
    },
    {
        id: 4,
        time: 1503309104120,
        title: 'Fourth Title..',
        content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
    },
    {
        id: 5,
        time: 1503309024620,
        title: 'Fifth Title..',
        content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    }
];

export default Notes;

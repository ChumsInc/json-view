export interface TestData {
    title: string,
    filename: string
}

export const testData: Record<string, TestData> = {
    artists: {
        title: 'Artists Search',
        filename: 'artists-search.json',
    },
    painOfSalvation: {
        title: 'Pain of Salvation',
        filename: 'pos.json'
    },
    dreamTheater: {
        title: 'Dream Theater',
        filename: 'dream-theater.json'
    },
    currentSong: {
        title: 'Now Playing',
        filename: 'current-song.json'
    },
    random: {
        title: 'Saved Random Data',
        filename: 'random-2.json'
    },
}

export const getTestData = async (filename: string):Promise<unknown|null> => {
    switch (filename) {
        case 'artists-search.json':
            return await import('./data/artists-search.json');
        case 'pos.json':
            return await import('./data/pos.json');
        case 'dream-theater.json':
            return await import('./data/dream-theater.json');
        case 'current-song.json':
            return await import('./data/current-song.json');
        case 'random-2.json':
            return await import('./data/random-2.json');
        default:
            return null;
    }
}

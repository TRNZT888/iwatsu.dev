type AnimeItem = {
    workTitle: string;
    workExp: string;
    link: string;
    mainKeyVisualPath: string;
    mainKeyVisualAlt: string;
    scenes: {
        link: string;
        mainScenePath: string;
        mainSceneAlt: string;
    }[];
    myListCount: number;
    favoriteCount: number;
}
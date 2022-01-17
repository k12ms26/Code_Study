//programmers: 베스트앨범
//중요중요중요
function solution(genres, plays) {
    const album = new Map();

    genres
        .map((genre, idx) => [genre, plays[idx]])
        .forEach(([genre, play], idx) => {
            const data = album.get(genre) || { total: 0, songs: []};
            album.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, idx }]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            }); //album => {total: 0, songs: [{ 500, 0 }, { 2500, 2 }]} ...
        });

    return [...album.entries()]
                            .sort((a, b) => b[1].total - a[1].total) //인덱스 0: key, 인덱스 1: value
                            .flatMap(item => item[1].songs)
                            .map(song => song.idx);
                            //map은 array 화 [{play: 200, idx: 4}] 이런식이고 flatMap은 {play: 200, idx: 4} 이렇게 바로 들어간다
}
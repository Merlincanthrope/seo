const collisionsLevel1 = [
//  0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 0
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 1
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 2
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 3
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 4
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 5
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 6
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 7
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292, 292,// 8
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292, 292,// 9
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292, 292,// 10
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 11
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 12
]

const collisionsLevel2 = [
//  0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 0
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 1
    292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 2
    292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 3
    292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 4
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 5
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 6
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 292, 292, 292, 0  , 292, 292, 292, 292,// 7
    292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 8
    292, 292, 0  , 0  , 0  , 0  , 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 9
    292, 292, 0  , 0  , 0  , 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292, 292,// 10
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 11
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 12
]

const collisionsLevel3 = [
//  0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 0
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 1
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 2
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 3
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 4
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 5
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 6
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 7
    292, 292, 292, 292, 292, 292, 292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 8
    292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 9
    292, 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 292,// 10
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 11
    292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,// 12
]
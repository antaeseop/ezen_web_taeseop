let 게임상황 = [] // 현재 알을 둔 상황을 저장하는 배열
let 승리 ='' // 이긴 알을 저장하는 변수

// 1. 게임판 버튼을 만들어주는 함수
function 게임판그리기(){
	
		승리 ='' // 승리 변수를 공백으로 초기화
		게임상황 = [null,null,null,null,null,null,null,null,null] // 배열에 0개 null로 초기화
		let 게임판 ='' // 빈 변수 선언
		
		for ( let i = 0 ; i<9 ; i++ ){
				// i는 0부터 9까지 1씩 반복증가 [ 8회반복 ]
				게임판 += `<button id=${i} onclick="버튼선택"(${i})">${i}</button>"`
				if ( i % 3 == 2) { 게임판 +=`<br>` }
		} // for end
		// html 태그 호출
		document.getElementById('gameboard').innerHTML = 게임판
} // f end

// 2. 버튼을 눌렀을때 이벤트 함수 [ 매개변수 : i = 선택한 버튼 번호 ]
function 버튼선택 ( i ){
		
		if( 중복검사( i ) ){
				alert('안내 ) 이미 둔 자리 입니다' + 승리)
				return // 함수 강제 종료
		} // if end
		document.getElementById( i ).innerHTML='O' // 1. 선택한 번호의 버튼 모양 변경
		게임상황[i] = 'O' // 2. 해당 알을 배열에 저장
		
		
		if( 게임결과 ( ) ) { // 게임결과 함수에서 true가 리턴되면
				alert('게임종료 승리 : ' + 승리 )
				return // 함수 강제 종료
		} // if end
		
		// 2. 난수 발생 [Math.floor(실수) : 소수점 버림 / Math.random() : 0 ~ 1 사이의 실수 난수 발생 ]
		while( true ){ // while(true) : 무한루프 [ 종료조건 : 랜덤위치에 알을 두었을때 반복종료 ]
				let rand = Math.floor( Math.random()*9)		// 0 ~ 8 사이의 난수 발생
				if ( !중복검사(rand) ){ // 해당 위치에 알이 없으면
						document.getElementById( rand ).innerHTML = 'X' // 버튼 모양 뱐걍
						게임상황[rand] = 'X' // 해당 알을 배열에 저장
						break // while 탈출
				}// if end
		} // while end
		
		
		if( 게임결과( ) ){ // 게임결과 함수에서 ture가 리턴되면
				alert('게임종료 승리 : ' + 승리 )
				return // 함수 강제 종료
		} // if end
	
		
		
		
} // f end
// 3. 현재 위치에 알이 있는지 검사 함수 [중복검사]
function 중복검사 ( i ){
		if( 게임상황[i] !=null ){ // 배열은 모두 null로 초기화했기때문에 null아니면 'O' 또는 'X' 가 존재하는 의미 [알이 있다.]
				return ture // 알이 있다. null이 아니면
		}else{
				return flase // 알이 없다. null 이면
		} // else end
} // if end
// 4. 현재 상황에 게임결과 판단하는 함수
function 게임결과(){
		// 1. 가로로 이기는 수 [ 0 1 2 , 3 4 5 , 6 7 8 ]
		for( let i = 0 ; i<=6 ; i+=3 ){
				// i 는 0부터 6까지 3씩 증가반복 [ 3회 : 0 3 6 ]
				if( 게임상황[i] !=null && 게임상황[i] == 게임상황[i+1] && 게임상황[i+1] == 게임상황[1+2] ){
						// && 이면서 면서 이고 모두 그리고
						// i가 0일때 0 == 1 == 2 // 	i가 3일때 3 == 4 == 5 // 	i가 6일때 6 == 7 == 8
						승리 = 게임상황[i] // 승리 변수에 i번째 알 저장
						return ture // 가로로 승리가 나왔을때 경우 함수 종료
				} // if end
		}// for end
		//2. 세로로 이기는 수 [ 0 3 6 , 1 4 7 , 2 5 8 ]
		for( let i = 0 ; i<=2 ; i++ ){
				// i는 0부터 2까지 1씩 증가반복 [ 3회 : 0 1 2 ]
				if( 게임상황[i] !=null && 게임상황[i] == 게임상황[i+3] && 게임상황[i+3] == 게임상황[i+6]){
						승리 = 게임상황[i] // 승리 변수에 i번째 알 저장
						return ture // 가로로 승리가 나왔을때 경우 함수 종료
				} // if end
		} // for end
}// f end
	








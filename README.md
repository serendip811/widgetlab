# 위젯연구소 GitHub Pages

Scriptable 아이폰 위젯 설치 가이드와 DM으로 전달할 개별 위젯 페이지를 제공하는 정적 사이트입니다.

## 구조

- `index.html`: 메인 페이지
- `install/`: Scriptable 설치 가이드
- `widgets/`: 목록 없는 DM 링크 안내 페이지
- `widgets/camping/`: 서울대공원 캠핑장 위젯 페이지
- `widgets/museum/`: 어린이박물관 위젯 페이지
- `widgets/pool/`: 수영장 예약 위젯 페이지
- `request/`: 위젯 요청 안내
- `assets/`: 공통 CSS, JavaScript, 이미지

## 로컬 확인

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## GitHub Pages 배포

1. GitHub 저장소에 이 파일들을 push합니다.
2. 저장소 `Settings > Pages`로 이동합니다.
3. `Build and deployment`를 `Deploy from a branch`로 설정합니다.
4. Branch는 `main`, folder는 `/root`를 선택합니다.
5. 저장하면 `https://<계정명>.github.io/<저장소명>/` 형태로 배포됩니다.

저장소 이름을 `<계정명>.github.io`로 만들면 루트 주소가 `https://<계정명>.github.io/`가 됩니다.

## 운영 메모

- 위젯 상세 페이지의 Scriptable 코드는 현재 배포 구조 확인용 샘플입니다.
- 실제 예약 확인 로직이 준비되면 각 상세 페이지의 코드 블록만 교체하면 됩니다.
- 새 위젯은 `widgets/<slug>/index.html`을 추가하고, 공개 목록에는 노출하지 않은 채 DM으로 개별 URL을 전달합니다.
- 도메인을 연결할 때는 GitHub Pages의 custom domain 설정을 사용하고, 필요하면 루트에 `CNAME` 파일을 추가합니다.

import styles from "./selected.module.css";
import { useDispatch, useSelector } from "react-redux";
import { pReset, pUnselect } from "../../slice/priconneSlice";
import { gReset, gUnselect } from "../../slice/genshinSlice";
import { Link } from "react-router-dom";
import Legend from "../legend/legend";
import Submit from "../submit/submit";
import CharacterCard from "../characterCard/characterCard";

const Selected = ({ game }) => {
  const pCharSelected = useSelector((state) => state.priconne.pCharSelected);
  const gCharSelected = useSelector((state) => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const unSelect = (e) => {
    const beUnSelected = e.target.alt;
    if (game === "priconne") {
      dispatch(pUnselect(beUnSelected));
    } else if (game === "genshin") {
      dispatch(gUnselect(beUnSelected));
    }
  };
  const showSelected = (rank) => {
    if (game === "priconne") {
      const pLen = pCharSelected.length;
      if (pLen === 0) return;
      switch (rank) {
        case 1:
          return (
            <CharacterCard
              selected={true}
              game={game}
              char={pCharSelected[0]}
              callback={unSelect}
            />
          );
        case 2:
          return (
            <>
              {pLen >= 2 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={pCharSelected[1]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
              {pLen >= 3 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={pCharSelected[2]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
            </>
          );
        case 3:
          return (
            <>
              {pLen >= 4 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={pCharSelected[3]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
              {pLen >= 5 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={pCharSelected[4]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
              {pLen >= 6 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={pCharSelected[5]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
            </>
          );
        default:
          break;
      }
    } else if (game === "genshin") {
      const gLen = gCharSelected.length;
      if (gLen === 0) return;
      switch (rank) {
        case 1:
          return (
            <CharacterCard
              selected={true}
              game={game}
              char={gCharSelected[0]}
              callback={unSelect}
            />
          );
        case 2:
          return (
            <>
              {gLen >= 2 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={gCharSelected[1]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
            </>
          );
        case 3:
          return (
            <>
              {gLen >= 3 ? (
                <CharacterCard
                  selected={true}
                  game={game}
                  char={gCharSelected[2]}
                  callback={unSelect}
                />
              ) : (
                ""
              )}
            </>
          );
        default:
          break;
      }
    }
  };

  const reset = () => {
    dispatch(pReset());
    dispatch(gReset());
  };

  return (
    <section className={styles.selected}>
      <h2 className={styles.afterSelect}>?????? ??????</h2>
      <Link to="/" onClick={reset} className={styles.home}>
        Home
      </Link>
      <button onClick={reset}>Reset</button>
      <div className={styles.toServer}>
        <div className={styles.score3}>{showSelected(1)}</div>
        <div className={styles.score2}>{showSelected(2)}</div>
        <div className={styles.score1}>{showSelected(3)}</div>
      </div>
      <Legend game={game} />
      {/* {sessionStorage.getItem('user') &&
      <Submit game={game}/>} */}
      {game === "genshin" ? (
        <pre className={styles.warn}>
          ????????? ?????? ????????? ????????? ????????? ?????? ??????????????????.
          <br />
          ????????? ????????? ?????? ??????????????????. ????????? ????????? ???????????????
          <br />
          ????????? ??????????????? ??????????????? ?????????. ????????? ???????????????
          <br />
          ?????? ?????????????????? ??????????????????.
          <br />
          ????????? ?????? ????????? ?????? ????????????????????????.
        </pre>
      ) : (
        ""
      )}
    </section>
  );
};

export default Selected;

import styles from './selected.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pReset} from '../../slice/priconneSlice';
import { gReset} from '../../slice/genshinSlice';
import SelectedChar from '../selectedChar/selectedChar';
import { Link } from 'react-router-dom';
import Legend from '../legend/legend';
import Submit from '../submit/submit';;

const Selected = ({game}) => {
  const pCharSelected = useSelector(state => state.priconne.pCharSelected);
  const gCharSelected = useSelector(state => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const showSelected = (rank) => {
    if(game === "priconne"){
      const pLen = pCharSelected.length;
      if(pLen === 0) return;
      switch(rank){
        case 1:
          return <SelectedChar game={game} char={pCharSelected[0]}/>
        case 2:
          return <>
          {pLen >= 2 ? <SelectedChar game={game} char={pCharSelected[1]}/> : ""}
          {pLen >= 3 ? <SelectedChar game={game} char={pCharSelected[2]}/> : ""}
          </>
        case 3:
          return <>
          {pLen >= 4 ? <SelectedChar game={game} char={pCharSelected[3]}/> : ""}
          {pLen >= 5 ? <SelectedChar game={game} char={pCharSelected[4]}/> : ""}
          {pLen >= 6 ? <SelectedChar game={game} char={pCharSelected[5]}/> : ""}
          </>
        default:
          break;
      }
    }
    else if(game === "genshin"){
      const gLen = gCharSelected.length;
      if(gLen === 0) return;
      switch(rank){
        case 1:
          return <SelectedChar game={game} char={gCharSelected[0]}/>
        case 2:
          return <>
          {gLen >= 2 ? <SelectedChar game={game} char={gCharSelected[1]}/> : ""}
          </>
        case 3:
          return <>{gLen >= 3 ? <SelectedChar game={game} char={gCharSelected[2]}/> : ""}</>
        default:
          break;
      }
    }
  };

  const reset = () => {
    dispatch(pReset());
    dispatch(gReset());
  }

  return (
    <section className={styles.selected}>
      <h2 className={styles.afterSelect}>나의 선택</h2>
      <Link to='/' onClick={reset} className={styles.home}>Home</Link>
      <button onClick={reset}>Reset</button>
      <div className={styles.toServer}>
        <div className={styles.score3}>
          {showSelected(1)}
        </div>
        <div className={styles.score2}>
          {showSelected(2)}
        </div>
        <div className={styles.score1}>
          {showSelected(3)}
        </div>
      </div>
      <Legend game={game}/>
      {sessionStorage.getItem('user') &&
      <Submit game={game}/>}
      {game === 'genshin' ? <pre className={styles.warn}>
        원신의 경우 여성과 남성의 투표를 따로 받고있습니다.<br/>
        본인의 성별에 맞게 투표해주세요. 본인이 여자면 여자투표에<br/>
        남자면 남자투표에 투표하시면 됩니다. 여성과 남성투표에<br/>
        모두 투표하는것은 불가능합니다.<br/>
        ※또한 분류 버튼은 단순 편의성버튼입니다.
      </pre> : ''}
    </section>
    
  )
};

export default Selected;

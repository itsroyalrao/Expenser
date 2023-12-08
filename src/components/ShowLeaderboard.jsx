import PropTypes from "prop-types";

function ShowLeaderboard({ leaderboard, rank }) {
  return (
    <>
      {leaderboard && (
        <div className="my-4 w-full flex flex-col">
          <div className="text-2xl flex justify-center my-3">LeaderBoard</div>
          <div className="grid grid-cols-3 text-lg">
            <div className="border break-words px-2 sm:py-2">Rank</div>
            <div className="border break-words px-2 sm:py-2">Users</div>
            <div className="border break-words px-2 sm:py-2">
              Total Expenses
            </div>
          </div>
          <div className="w-full flex flex-col text-base">
            {leaderboard.map((lb) => {
              rank++;
              return (
                <div key={lb.email} className="w-full grid grid-cols-3">
                  <div className="border break-words px-2 sm:py-2">{rank}</div>
                  <div className="border break-words px-2 sm:py-2">
                    {lb.email}
                  </div>
                  <div className="border break-words px-2 sm:py-2">
                    {lb.total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

ShowLeaderboard.propTypes = {
  leaderboard: PropTypes.array,
  rank: PropTypes.number,
};

export default ShowLeaderboard;

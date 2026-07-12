def rank_candidates(candidate_results):
    """
    Sort candidates based on match score.
    """

    ranked = sorted(
        candidate_results,
        key=lambda candidate: candidate["match_score"],
        reverse=True
    )

    return ranked
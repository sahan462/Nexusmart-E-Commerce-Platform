export default function ItemDescriptionPanel(params) {
  return (
    <div>
      <div className="font-medium mb-2 text-lg">Description</div>
      <div className="px-2">{params.descriptionData}</div>
    </div>
  );
}
